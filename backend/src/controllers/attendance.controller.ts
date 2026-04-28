import { Request, Response } from "express";
import {prisma } from "../prisma/client";

export const markAttendance = async (req: Request, res: Response) => {
  const { employeeId, date, status } = req.body;

  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return res.status(400).json({ error: "Invalid date" });
  }

  try {
    const record = await prisma.attendance.upsert({
      where: {
        employeeId_date: {
          employeeId,
          date: parsedDate,
        },
      },
      update: { status },
      create: {
        employeeId,
        date: parsedDate,
        status,
      },
    });

    res.json(record);
  } catch (err) {
    res.status(500).json({ error: "Error marking attendance" });
  }
};