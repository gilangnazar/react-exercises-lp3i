const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/purchases', async (req, res) => {
  console.log('purchases: ', req.body);
});

module.exports = router;
