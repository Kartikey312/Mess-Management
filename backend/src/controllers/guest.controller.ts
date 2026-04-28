import { Request, Response } from "express";
import {prisma} from "../prisma/client";

export const addGuest = async (req: Request, res: Response) => {
  const { name, date } = req.body;

  if (!name || !date) {
    return res.status(400).json({ error: "Name and date are required" });
  }

  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return res.status(400).json({ error: "Invalid date" });
  }

  try {
    const guest = await prisma.guest.create({
      data: {
        name,
        date: parsedDate,
      },
    });

    res.status(201).json(guest);
  } catch (err) {
    res.status(500).json({ error: "Failed to add guest" });
  }
};