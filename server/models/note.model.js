const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  NoteID: String,
  Title: String,
  Desc: String
});

module.exports = mongoose.model("Note", noteSchema);
