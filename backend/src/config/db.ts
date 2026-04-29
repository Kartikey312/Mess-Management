import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database.sqlite", (err) => {
  if (err) {
    console.log("DB Error:", err);
  } else {
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

export default db;