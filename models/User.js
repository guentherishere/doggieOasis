var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);
