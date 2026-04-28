import { Request, Response } from "express";
import {prisma} from "../prisma/client";

export const getMonthlyReport = async (req: Request, res: Response) => {
  const { month, year } = req.query;

  const m = Number(month);
  const y = Number(year);

  if (!m || !y || m < 1 || m > 12) {
    return res.status(400).json({ error: "Invalid month or year" });
  }

  // ✅ correct way to get month range
  const start = new Date(y, m - 1, 1);
  const end = new Date(y, m, 0); // last day of month

  try {
    const data = await prisma.attendance.groupBy({
      by: ["employeeId"],
      _count: {
        _all: true,
      },
      where: {
        status: "present",
        date: {
          gte: start,
          lte: end,
        },
      },
    });

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch report" });
  }
};