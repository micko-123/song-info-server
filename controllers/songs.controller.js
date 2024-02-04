const getSongs = (req, res) => {
  res.end("get all songs");
};
const createSong = (req, res) => {
  res.end("create song");
};
const updateSong = (req, res) => {
  res.end("update song");
};
const deleteSong = (req, res) => {
  res.end("delete songs");
};

module.exports = {
  getSongs,
  createSong,
  updateSong,
  deleteSong,
};
