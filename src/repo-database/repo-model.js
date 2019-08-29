'use strict';

const mongoose = require('mongoose');

const repo = new mongoose.Schema({
  url: {type: String, required: true, unique: true},
  port: {type: Number, required: true},
  repo: {type: String},
});

module.exports = mongoose.model('repo', repo);
