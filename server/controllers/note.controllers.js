const Note = require("../models/note.model.js");
// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
  console.log("Get Note API Calling");
  Note.find()
    .then(note => {
      res.send(note);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Something went wrong while getting list of notes."
      });
    });
};

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Please fill all required field"
    });
  }
  // Create a new User
  const note = new Note({
    NoteID: req.body.NoteID,
    Title: req.body.Title,
    Desc: req.body.Desc,
    User: req.body.User
  });
  // Save user in the database
  note
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong while creating new note."
      });
    });
};
