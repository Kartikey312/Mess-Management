"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const db = new sqlite3_1.default.Database("database.sqlite", (err) => {
    if (err) {
        console.log("DB Error:", err);
    }
    else {
        console.log("SQLite Connected");
    }
});
// Create tables
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS Employee (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      employeeId TEXT UNIQUE
    )
  `);
    db.run(`
    CREATE TABLE IF NOT EXISTS Attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      employeeId INTEGER,
      date TEXT,
      status TEXT,
      UNIQUE(employeeId, date)
    )
  `);
    db.run(`
    CREATE TABLE IF NOT EXISTS Guest (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      date TEXT
    )
  `);
});
exports.default = db;
//# sourceMappingURL=db.js.map