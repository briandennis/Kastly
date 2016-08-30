const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');
const User = require('./user');

const CommentSchema = new Schema({
  user: User,
  text: { type: String, default: '' },
  timestamp: { type: Number}
});

CommentSchema.plugin(findOrCreate);

module.exports = mongoose.model('Comment', CommentSchema);
