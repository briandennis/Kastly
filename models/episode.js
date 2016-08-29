const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Podcast = require('./podcast').schema;

const EpisodeSchema = new Schema({
  podcast: Podcast,
  description: { type: String, default: '' },
  title: { type: String, default: '' },
  date: { type: Date },
  link: { type: String }
});

module.exports = mongoose.model('Episode', EpisodeSchema);
