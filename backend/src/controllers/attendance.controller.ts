import { Request, Response } from "express";
import db from "../config/db";

export const markAttendance = (req: Request, res: Response) => {
  const { employeeId, date, status } = req.body;

  db.run(
    `INSERT OR REPLACE INTO Attendance (employeeId, date, status)
     VALUES (?, ?, ?)`,
    [employeeId, date, status],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ success: true });
    }
  );
};