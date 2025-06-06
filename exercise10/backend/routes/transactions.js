const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/transactions", async (req, res) => {
  try {
    const [data] = await db.execute("select * from transactions");
    res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      msg: "server error",
      error: error,
    });
  }
});

module.exports = router;
