import { Request, Response } from "express";
import db from "../config/db";

export const addGuest = (req: Request, res: Response) => {
  const { name, date } = req.body;

  db.run(
    `INSERT INTO Guest (name, date) VALUES (?, ?)`,
    [name, date],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID });
    }
  );
};