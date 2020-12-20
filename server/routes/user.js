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
  res.json(req.session.User);
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
    res.json({
      Error: false,
      Success: true,
      Message: {
        Name: username
      }
    });
  }
});

module.exports = app;
