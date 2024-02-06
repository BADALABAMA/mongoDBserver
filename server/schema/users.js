const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  userType: String,
  img: String,
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
