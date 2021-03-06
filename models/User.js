const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  hash: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
