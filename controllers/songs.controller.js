const asyncHandler = require("express-async-handler");
const { deleteOne, updateOne, getAll, getOne, createOne } = require("./crud");

const Song = require("../models/Song");

// -- CRUD controllers--
const getSongs = getAll(Song);

const createSong = createOne(Song);

const updateSong = updateOne(Song);

const deleteSong = deleteOne(Song);

// -- Stats --

// Total # of songs, artists, albums, genres
const getTotalStats = asyncHandler(async (req, res) => {
  const totalStats = await Song.aggregate([
    {
      $group: {
        _id: null,
        totalSongs: { $sum: 1 },
        totalArtists: { $addToSet: "$artist" },
        totalAlbums: { $addToSet: "$album" },
        totalGenres: { $addToSet: "$genre" },
      },
    },
    {
      $project: {
        _id: 0,
        totalSongs: 1,
        totalArtists: { $size: "$totalArtists" },
        totalAlbums: { $size: "$totalAlbums" },
        totalGenres: { $size: "$totalGenres" },
      },
    },
  ]);
  res.json(totalStats[0]);
});

// # of songs in every genre
const getGenreStats = asyncHandler(async (req, res) => {
  const genreStats = await Song.aggregate([
    {
      $group: {
        _id: "$genre",
        count: { $sum: 1 },
      },
    },
  ]);
  res.json(genreStats);
});

// # of songs & albums each artist has
const getArtistStats = asyncHandler(async (req, res) => {
  const artistStats = await Song.aggregate([
    {
      $group: {
        _id: "$artist",
        totalSongs: { $sum: 1 },
        totalAlbums: { $addToSet: "$album" },
      },
    },
    {
      $project: {
        _id: 1,
        totalSongs: 1,
        totalAlbums: { $size: "$totalAlbums" },
      },
    },
  ]);
  res.json(artistStats);
});

// # songs in each album
const getAlbumStats = asyncHandler(async (req, res) => {
  const albumStats = await Song.aggregate([
    {
      $group: {
        _id: "$album",
        count: { $sum: 1 },
      },
    },
  ]);
  res.json(albumStats);
});

module.exports = {
  getSongs,
  createSong,
  updateSong,
  deleteSong,
  getTotalStats,
  getGenreStats,
  getArtistStats,
  getAlbumStats,
};
