const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/purchaseitems', async (req, res) => {
  console.log(req.body);
});

module.exports = router;
