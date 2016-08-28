const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Podcast = require('./podcast');

const EpisodeSchema = new Schema({
  podcast: { type: Schema.ObjectId, ref: Podcast },
  description: { type: String, default: '' },
  title: { type: String, default: '' },
  date: { type: Date },
  link: { type: String }
});

module.exports = mongoose.model('Episode', EpisodeSchema);
