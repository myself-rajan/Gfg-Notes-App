const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  //username: String,
  //password: String
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  address: String
});

module.exports = mongoose.model("users", UserSchema);
