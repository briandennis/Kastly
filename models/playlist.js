const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;
const Comment     = require('./comment');
const Episode     = require('./episode');
const findOrCreate = require('mongoose-findorcreate');

const PlaylistSchema = new Schema({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  content: { type: [Episode], default: [] },
  comments: { type: [Comment], default: [] },
  date: { type: Date }
});

UserSchema.plugin(findOrCreate);

module.exports = mongoose.model('Playlist', UserSchema);
