const express = require('express');
const router = express.Router();

router.get('/buildings', async (req, res) => {
  try {
    const response = await fetch('https://api.umd.io/v1/map/buildings');
    const data = await response.json();


    res.render('buildings', { buildings: data });
  } catch (err) {
    console.error(err);
    res.send('Error loading building data');
  }
});

module.exports = router;