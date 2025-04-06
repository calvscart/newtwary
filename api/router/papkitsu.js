const express = require('express');
const router = express.Router();
const fs = require('fs');

const words = require('../json/words.json');

router.get('/papkitsu', (req, res) => {
  const papkitsu = papkitsu[Math.floor(Math.random() * papkitsu.length)];
  res.json({ word: papkitsu });
});

module.exports = router;