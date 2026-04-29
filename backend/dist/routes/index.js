"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_controller_1 = require("../controllers/employee.controller");
const attendance_controller_1 = require("../controllers/attendance.controller");
const guest_controller_1 = require("../controllers/guest.controller");
const report_controller_1 = require("../controllers/report.controller");
const router = express_1.default.Router();
router.post("/employee", employee_controller_1.addEmployee);
router.get("/employee", employee_controller_1.getEmployees);
router.post("/attendance", attendance_controller_1.markAttendance);
router.post("/guest", guest_controller_1.addGuest);
router.get("/report", report_controller_1.getMonthlyReport);
exports.default = router;
//# sourceMappingURL=index.js.map