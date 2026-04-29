"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthlyReport = void 0;
const db_1 = __importDefault(require("../config/db"));
const getMonthlyReport = (req, res) => {
    const { month } = req.query;
    db_1.default.all(`SELECT employeeId, COUNT(*) as totalMeals
     FROM Attendance
     WHERE status = 'present' AND date LIKE ?
     GROUP BY employeeId`, [`${month}%`], (err, rows) => {
        if (err)
            return res.status(500).json(err);
        res.json(rows);
    });
};
exports.getMonthlyReport = getMonthlyReport;
//# sourceMappingURL=report.controller.js.map