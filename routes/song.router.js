const express = require("express");
const router = express.Router();

const {
  getSongs,
  createSong,
  updateSong,
  deleteSong,
} = require("../controllers/songs.controller");

router.route("/").get(getSongs).post(createSong);
router.route("/:id").put(updateSong).delete(deleteSong);

module.exports = router;
