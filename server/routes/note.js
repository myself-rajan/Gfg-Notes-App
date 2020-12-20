const note = require("express").Router();
//Dummy list of notes for now
const Notes = [
  {
    NoteID: "hello",
    Title: "Hello World",
    Desc: "Hello World Hello World Hello world Hello World",
    User: "Rajan"
  },
  {
    NoteID: "faq",
    Title: "Frequently Asked Question",
    Desc: "Hello World Hello World Hello world Hello World",
    User: "Rajan"
  },
  {
    NoteID: "Ideas",
    Title: "My Ideas",
    Desc: "Hello World Hello World Hello world Hello World",
    User: "Rajan"
  },
  {
    NoteID: "Suggestion",
    Title: "Suggestion",
    Desc: "Hello World Hello World Hello world Hello World",
    User: "Rajan"
  },
  {
    NoteID: "Follows",
    Title: "Follow",
    Desc: "Hello World Hello World Hello world Hello World",
    User: "New User"
  }
];

note.get("/", (req, res) => {
  res.json(Notes);
});

module.exports = note;
