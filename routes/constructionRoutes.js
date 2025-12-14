const express = require('express');
const router = express.Router();
const Construction = require('../models/Construction');

router.get('/', async (req, res) => {
  const sites = await Construction.find();
  res.render('index', { sites });
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.post('/new', async (req, res) => {
  await Construction.create(req.body);
  res.redirect('/');
});

module.exports = router;