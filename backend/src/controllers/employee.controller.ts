import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export const addEmployee = async (req: Request, res: Response) => {
  const { name, employeeId } = req.body;

  const emp = await prisma.employee.create({
    data: { name, employeeId },
  });

  res.json(emp);
};

export const getEmployees = async (req: Request, res: Response) => {
  const employees = await prisma.employee.findMany();
  res.json(employees);
};
