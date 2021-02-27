const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  note_id: String,
  title: String,
  desc: String
});

module.exports = mongoose.model("notes", noteSchema);
