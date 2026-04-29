"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markAttendance = void 0;
const db_1 = __importDefault(require("../config/db"));
const markAttendance = (req, res) => {
    const { employeeId, date, status } = req.body;
    db_1.default.run(`INSERT OR REPLACE INTO Attendance (employeeId, date, status)
     VALUES (?, ?, ?)`, [employeeId, date, status], function (err) {
        if (err)
            return res.status(500).json(err);
        res.json({ success: true });
    });
};
exports.markAttendance = markAttendance;
//# sourceMappingURL=attendance.controller.js.map