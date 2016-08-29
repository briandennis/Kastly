const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;
const Comment     = require('./comment').schema;
const Episode     = require('./episode').schema;
const findOrCreate = require('mongoose-findorcreate');

const PlaylistSchema = new Schema({
  title: { type: String },
  description: { type: String },
  authorId: { type: String },
  content: { type: [Episode], default: [] },
  comments: { type: [Comment], default: [] },
  stars: { type: [String], default: [] },
  date: { type: Date }
});

PlaylistSchema.plugin(findOrCreate);

module.exports = mongoose.model('Playlist', PlaylistSchema);
