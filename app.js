const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.end("hi");
});
module.exports = app;
