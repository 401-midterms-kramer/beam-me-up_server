'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../auth/middleware.js');
const shellscript = require('../helpers/gitcommands.js')
router.post('/launch', auth, theMagic);

// Route Handlers
function theMagic(req, res, next) {
  let repoData = req.body;
  shellscript(repoData, inUsePortPool).then(repodata => {
    res.status(200).json(repodata);
  })
}

module.exports = router;
