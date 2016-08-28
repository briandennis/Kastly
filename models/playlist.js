const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const PlaylistSchema = new Schema({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  content: { type: Array, default: [] },
  comments: { type: String, default: '' },
  twitterId: { type: String, default: '' }
});

UserSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', UserSchema);
