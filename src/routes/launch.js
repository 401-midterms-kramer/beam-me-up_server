'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../auth/middleware.js');
const shellscript = require('../helpers/gitcommands.js')
router.post('/launch', auth, theMagic);

// Route Handlers
function theMagic(req, res, next) {
  //assign inUsePortPool to an array containing all the currently taken ports
  let repoData = req.body;
  shellscript(repoData, inUsePortPool).then(repodata => {
    // right now repodata will be the results from this single repo starting
    res.status(200).json(repodata);
  })
}

module.exports = router;
