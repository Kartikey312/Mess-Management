import express from "express";
import { addEmployee, getEmployees } from "../controllers/employee.controller";
import { markAttendance } from "../controllers/attendance.controller";
import { addGuest } from "../controllers/guest.controller";
import { getMonthlyReport } from "../controllers/report.controller";

const router = express.Router();

router.post("/employee", addEmployee);
router.get("/employee", getEmployees);

router.post("/attendance", markAttendance);

router.post("/guest", addGuest);

router.get("/report", getMonthlyReport);

export default router;