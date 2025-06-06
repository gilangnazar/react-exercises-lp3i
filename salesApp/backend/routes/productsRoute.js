const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/products', async (req, res) => {
  try {
    const [data] = await db.execute('select * from products');
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'server error',
      error: error,
    });
  }
});

module.exports = router;
