const express = require("express");
const router = express.Router();

const {
  getSongs,
  createSong,
  updateSong,
  deleteSong,
  getTotalStats,
  getGenreStats,
  getArtistStats,
  getAlbumStats,
  getOverAllStats,
} = require("../controllers/songs.controller");

router.route("/").get(getSongs).post(createSong);

router.route("/:id").put(updateSong).delete(deleteSong);

router.get("/totalStats", getTotalStats);
router.get("/genreStats", getGenreStats);
router.get("/artistStats", getArtistStats);
router.get("/albumStats", getAlbumStats);


router.get('/overAllStats', getOverAllStats)

module.exports = router;
