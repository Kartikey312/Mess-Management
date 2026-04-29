import { Request, Response } from "express";
import db from "../config/db";

export const getMonthlyReport = (req: Request, res: Response) => {
  const { month } = req.query;

  db.all(
    `SELECT employeeId, COUNT(*) as totalMeals
     FROM Attendance
     WHERE status = 'present' AND date LIKE ?
     GROUP BY employeeId`,
    [`${month}%`],
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    }
  );
};