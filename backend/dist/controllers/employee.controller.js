"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployees = exports.addEmployee = void 0;
const db_1 = __importDefault(require("../config/db"));
const addEmployee = (req, res) => {
    const { name, employeeId } = req.body;
    db_1.default.run(`INSERT INTO Employee (name, employeeId) VALUES (?, ?)`, [name, employeeId], function (err) {
        if (err)
            return res.status(500).json(err);
        res.json({ id: this.lastID, name, employeeId });
    });
};
exports.addEmployee = addEmployee;
const getEmployees = (req, res) => {
    db_1.default.all(`SELECT * FROM Employee`, [], (err, rows) => {
        if (err)
            return res.status(500).json(err);
        res.json(rows);
    });
};
exports.getEmployees = getEmployees;
//# sourceMappingURL=employee.controller.js.map