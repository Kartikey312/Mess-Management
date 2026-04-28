import { Request, Response } from "express";
import {prisma} from "../prisma/client";

export const addEmployee = async (req: Request, res: Response) => {
  const { name, employeeId, department } = req.body;

  if (!name || !employeeId || !department) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const emp = await prisma.employee.create({
      data: { name, employeeId, department },
    });

    res.status(201).json(emp);
  } catch (err) {
    res.status(500).json({ error: "Failed to create employee" });
  }
};

export const getEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await prisma.employee.findMany();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch employees" });
  }
};