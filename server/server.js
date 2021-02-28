const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
// const { MONGOURI } = require("./config/keys");
//NODEMAILER
// var nodeMailer = require("nodemailer");
// var transport = nodeMailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   reqireTLS: true,
//   auth: {
//     user: "rksucan@gmail.com",
//     pass: ""
//   }
// });
// var mailOptions = {
//   from: "rksucan@gmail.com",
//   to: "rksucan@gmail.com",
//   subject: "test nodemailer",
//   text: "Hello mail"
// };
// transport.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.warn(error);
//   } else {
//     console.warn("email has been sent", info.response);
//   }
// });

//SOCKET.IO
const socketio = require("socket.io");
const http = require("http");
const { addUser, getUser, removeUser, getUsersInRoom } = require("./users.js");

const app = express();

//SOCKET.IO
const server = http.createServer(app);
const io = socketio(server);
io.on("connection", socket => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.emit("message", { user: "admin", text: `${user.name}, welcome` });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name}, has joined!` });

    socket.join(user.room);

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    console.log("User had left!");
  });
});

const api = require("./routes/api");
const port = process.env.PORT | 3100;

app.use(express.json());
app.use(morgan("dev"));
app.use(
  session({
    secret: "add data",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

// Configuring the database
const dbConfig = require("./config/db.config.js");
const mongoose = require("mongoose");
//mongoose.Promise = global.Promise;

// User Model
const User = require("./models/user.model.js");
const Note = require("./models/note.model.js");

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database.", err);
    process.exit();
  });

User.find({}, function (err, users) {
  if (err) console.warn(err);
  //console.warn(users);
});

const data = new User({
  _id: new mongoose.Types.ObjectId(),
  name: "add",
  email: "add@gmail.com",
  address: "mail address"
});
data
  .save()
  .then(result => {
    //console.warn(result);
  })
  .catch(err => console.warn(err));

/* const noteData = new Note({
  _id: new mongoose.Types.ObjectId(),
  note_id: "Note Data",
  title: "Note Title",
  desc: "Description"
});
noteData
  .save()
  .then(result => {
    console.warn(result);
  })
  .catch(err => console.warn(err)); */

app.use("/api", api); // This is the Route handler
app.get("/", (req, res) => {
  res.json("Welcome to API Server!");
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
  });
}
server.listen(port, () => {
  console.log(`Server started in port ${port}!`);
});
