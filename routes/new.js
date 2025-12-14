const express = require('express');
const router = express.Router();
const Construction = require('../models/construction');


router.get('/', (req, res) => {
  res.render('new');
});

router.post('/', async (req, res) => {
  const { location, description, detour } = req.body;

  await Construction.create({
    location,
    description,
    detour
  });

  res.redirect('/');
});

module.exports = router;