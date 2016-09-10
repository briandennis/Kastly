const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PodcastSchema = new Schema({
  title: { type: String, default: '' },
  castId: { type: String },
  image: { type: String }
});

module.exports = mongoose.model('Podcast', PodcastSchema);
