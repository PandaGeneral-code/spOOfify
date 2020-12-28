const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const albumSchema = new Schema({
  albumArtist: { required: true, type: [String] },
  albumCoverFileName: { required: false, type: String },
  albumName: { required: true, type: String },
  albumYear: { required: true, type: Number },
});

module.exports = mongoose.model("Album", albumSchema);
