import { Request, Response } from "express";
import db from "../config/db";

export const addEmployee = (req: Request, res: Response) => {
  const { name, employeeId } = req.body;

  db.run(
    `INSERT INTO Employee (name, employeeId) VALUES (?, ?)`,
    [name, employeeId],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID, name, employeeId });
    }
  );
};

export const getEmployees = (req: Request, res: Response) => {
  db.all(`SELECT * FROM Employee`, [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};