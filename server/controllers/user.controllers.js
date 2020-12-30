const User = require("../models/user.model.js");
// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
  console.log("Find All Calling");
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Something went wrong while getting list of users."
      });
    });
};
