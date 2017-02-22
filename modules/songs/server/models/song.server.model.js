'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Song Schema
 */
var SongSchema = new Schema({
  artistName: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  songTitle: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Song', SongSchema);
