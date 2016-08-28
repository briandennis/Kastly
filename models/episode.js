const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const EpisodeSchema = new Schema({
  description: { type: String, default: '' },
  title: { type: String, default: '' },
  date: { type: Date },
  link: { type: String }
});

module.exports = mongoose.model('Episode', EpisodeSchema);
