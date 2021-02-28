const note = require("express").Router();
const noteController = require("../controllers/note.controllers");

//Dummy list of notes for now
// const Notes = [
//   {
//     NoteID: "hello",
//     Title: "Hello World",
//     Desc: "Hello World Hello World Hello world Hello World",
//     User: "Rajan"
//   },
//   {
//     NoteID: "faq",
//     Title: "Frequently Asked Question",
//     Desc: "Hello World Hello World Hello world Hello World",
//     User: "Rajan"
//   },
//   {
//     NoteID: "Ideas",
//     Title: "My Ideas",
//     Desc: "Hello World Hello World Hello world Hello World",
//     User: "Rajan"
//   },
//   {
//     NoteID: "Suggestion",
//     Title: "Suggestion",
//     Desc: "Hello World Hello World Hello world Hello World",
//     User: "Rajan"
//   },
//   {
//     NoteID: "Follows",
//     Title: "Follow",
//     Desc: "Hello World Hello World Hello world Hello World",
//     User: "New User"
//   }
// ];
// note.get("/", (req, res) => {
//   res.json(Notes);
// });

note.get("/", noteController.findAll);

note.post("/create", (req, res) => {
  const { NoteID, Title, Desc, User } = req.body;
  /* if (Notes.find(n => n.NoteID === NoteId)) {
    re.status(409).json({
      Error: true,
      Success: false,
      Message: "Note ID aleady taken!"
    });
  } else {
    //Notes.push({ NoteId, Title, DESC, User });
    note.post("/create", noteController.create);
    res.status(201).json({
      Error: false,
      Success: true,
      Message: `Note ${Title} created successfully`
    });
  } */
  note.post("/create", noteController.create);
  res.status(201).json({
    Error: false,
    Success: true,
    Message: `Note ${Title} created successfully`
  });
  //res.json({ NoteID, Title, Desc, User });
});

module.exports = note;
