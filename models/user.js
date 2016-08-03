const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const UserSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  username: { type: String, default: '' },
  twitterId: { type: String, default: '' }
});

UserSchema.plugin(findOrCreate);

mongoose.model('User', UserSchema);
