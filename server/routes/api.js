const app = require("express").Router();

app.get("/", (req, res) => {
  res.json("Welcome to api route!");
});

module.exports = app;
