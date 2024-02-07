const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/songs.router");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/v1/songs", router);

app.use("/", (req, res) => {
  res.redirect("/api/v1/songs");
});

module.exports = app;
