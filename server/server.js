const express = require("express");
const morgan = require("morgan");
const app = express();
const api = require("./routes/api");
const port = 3100;

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", api); // This is the Route handler
app.get("/", (req, res) => {
  res.json("Welcome to API Server!");
});

app.listen(port, () => {
  console.log(`Server started in port ${port}!`);
});
