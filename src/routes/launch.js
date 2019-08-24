'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../auth/middleware.js');
const shellscript = require('../helpers/gitcommands.js')
router.post('/launch', auth, theMagic);

// Route Handlers
function theMagic(req, res, next) {
  let thingie = req.body
  let output = thingie;
  console.log(thingie)
  res.status(200).json(output);
}

module.exports = router;
