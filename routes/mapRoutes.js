const express = require('express');
const router = express.Router();
const Construction = require('../models/construction');

router.get('/maps', async (req, res) => {
  try {
    const sites = await Construction.find(); 
    res.render('maps', { sites });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading map");
  }
});

module.exports = router;