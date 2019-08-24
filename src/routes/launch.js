'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../auth/middleware.js');
const shellscript = require('../helpers/gitcommands.js')
router.post('/launch', auth, theMagicRoute);

// Route Handlers
function theMagicRoute(req, res, next) {
  //assign inUsePortPool to an array containing all the currently taken ports
  let inUsePortPool = [3000,5050,3030,3001,3002];
  let repoData = req.body;
  shellscript(repoData, inUsePortPool).then(repodata => {
    // right now repodata will be the results from this single repo starting
    inUsePortPool.push(repodata.port)
    res.status(200).json(repodata);
  })
  .catch(err => console.log(err))
}

module.exports = router;
