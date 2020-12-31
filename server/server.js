const express = require("express");
const morgan = require("morgan");
const session = require("express-session");

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
const port = 3100;

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
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database.", err);
    process.exit();
  });

app.use("/api", api); // This is the Route handler
app.get("/", (req, res) => {
  res.json("Welcome to API Server!");
});

server.listen(port, () => {
  console.log(`Server started in port ${port}!`);
});
