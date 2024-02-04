const { deleteOne, updateOne, getAll, createOne } = require("../utils/crud");

const Song = require("../models/Song");

// - CRUD controllers- //
const getSongs = getAll(Song);

const createSong = createOne(Song);

const updateSong = updateOne(Song);

const deleteSong = deleteOne(Song);

module.exports = {
  getSongs,
  createSong,
  updateSong,
  deleteSong,
};
