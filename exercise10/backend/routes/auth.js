const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

const db = require("../db");

require("dotenv").config();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const [rows] = await db.execute("select * from users where username = ?", [
    username,
  ]);
  if (rows.length === 0) {
    return res.status(401).json({
      msg: "user not found",
    });
  }

  const user = rows[0];
  const valid = await bcrypt.compare(password, user.password);
  if (!valid)
    return res.status(401).json({
      msg: "invalid password",
    });

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "60s",
    }
  );

  res.json({ token, username: user.username });
});

router.get("/profile", async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ user: decoded });
  } catch (error) {
    res.sendStatus(403);
  }
});

module.exports = router;
