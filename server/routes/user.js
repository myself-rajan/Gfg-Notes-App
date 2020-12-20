const user = require("express").Router();

//Dummy list of users for now.
const Users = {
  Rajan: "rks12345",
  Praveen: "Hello123",
  Bhushan: "dark456",
  Rishav: "ris2000",
  Shivan: "password",
  Isabel: "coolcat123",
  Shashi: "akcd@123"
};

user.get("/", (req, res) => {
  if (!!req.session.User) {
    res.json(req.session.User);
  } else {
    res.status(401).json({
      Error: true,
      Success: false,
      Message: "Not Logged In!"
    });
  }
});
user.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!Users[username]) {
    // User not found
    req.session.destroy();
    res.status(404).json({
      Error: true,
      Success: false,
      Message: "User not Found"
    });
  } else if (Users[username] && Users[username] !== password) {
    // Password is wrong
    //this.setState({ User: null, Error: "Wrong Password!" });
    req.session.destroy();
    res.status(403).json({
      Error: true,
      Success: false,
      Message: "Invalid username and password!"
    });
  } else {
    // Password is right!
    //this.setState({ User: { Name: username }, Error: null });
    req.session.User = {
      Name: username
    };
    res.json({
      Error: false,
      Success: true,
      Message: {
        Name: username
      }
    });
  }
});
user.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!Users[username]) {
    Users[username] = password;
    res.json(201).json({
      Error: false,
      Success: true,
      Message: "Created User " + username + "."
    });
  } else {
    res.status(409).json({
      Error: true,
      Success: false,
      Message: "User " + username + "already exists."
    });
  }
});
module.exports = user;
