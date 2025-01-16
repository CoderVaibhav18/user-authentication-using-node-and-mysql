const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  db.query(
    "SELECT email FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) throw err;

      if (result.length > 0) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword],
        (err, result) => {
          if (err) throw err;
          res.status(201).json({ message: "User registered successfully" });
        }
      );
    }
  );
};
const login = () => {};

module.exports = {
  signup,
  login,
};
