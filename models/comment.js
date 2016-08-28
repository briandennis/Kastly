const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const CommentSchema = new Schema({
  userId: { type: String, default: '' },
  text: { type: String, default: '' },
  timestamp: { type: Number}
});

CommentSchema.plugin(findOrCreate);

module.exports = mongoose.model('Comment', CommentSchema);
