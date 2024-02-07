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
  res.send(
    "<body> <h2>Go to: /api/v1/songs  </h2> <br /> <h2> or Go to: '/download' to download postman collection </h2> </body>"
  );
});

app.get("/download", function (req, res) {
  const file = `${__dirname}/upload-folder/Song-info-management.postman_collection.json`;
  res.download(file); // Set disposition and send it.
});

module.exports = app;
