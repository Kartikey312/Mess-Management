"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGuest = void 0;
const db_1 = __importDefault(require("../config/db"));
const addGuest = (req, res) => {
    const { name, date } = req.body;
    db_1.default.run(`INSERT INTO Guest (name, date) VALUES (?, ?)`, [name, date], function (err) {
        if (err)
            return res.status(500).json(err);
        res.json({ id: this.lastID });
    });
};
exports.addGuest = addGuest;
//# sourceMappingURL=guest.controller.js.map