const express = require('express');
const router = express.Router();
const fs = require('fs');

const pappath = path.join(__dirname, '..', 'data', 'papkitsu.json');
const words = JSON.parse(fs.readFileSync(pappath, 'utf8'));

router.get('/papkitsu', (req, res) => {
  const papkitsu = papkitsu[Math.floor(Math.random() * papkitsu.length)];
  res.json({ word: papkitsu });
});

module.exports = router;