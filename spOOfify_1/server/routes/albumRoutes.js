const express = require("express");

const { getAlbumArt } = require("../controllers/albumController");

const albumRouter = express.Router();

albumRouter.get("/albumArt/:albumArtFileName", getAlbumArt);

module.exports = albumRouter;
