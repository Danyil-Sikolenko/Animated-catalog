const express = require('express');
const router = express.Router();
const catalog = require('../data/catalog.json');

router.get('/items', (req, res) => {
  res.json(catalog.items);
});

router.get('/models', (req, res) => {
  res.json(catalog.models);
});



module.exports = router;
