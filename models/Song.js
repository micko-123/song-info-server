const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    maxLength: 255,

    trim: true,
  },
  artist: {
    type: String,
    maxLength: 50,
    minLength: 2,
    trim: true,
  },
  album: {
    type: String,
    maxLength: 50,
    trim: true,
  },
  genre: {
    type: String,
    maxLength: 50,
    minLength: 3,
    trim: true,
  },
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
