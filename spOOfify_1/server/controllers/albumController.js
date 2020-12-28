const path = require("path");

// const albums = require("../models/albums");

const getAlbumArt = ({ params: { albumArtFileName } }, res, next) =>
  res
    .status(200)
    .sendFile(path.join(__dirname, "..", "images", albumArtFileName), (err) => {
      if (err) {
        const newError = new Error();
        newError.message =
          "Could not find album art with the provided file name.";
        newError.status = 404;
        next(newError);
      }
    });

module.exports = { getAlbumArt };

// const fs = require("fs");
// const path = require("path");

// const directoryPath = path.join(__dirname, "images");

// app.get("/", (req, res, next) => {
//   fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//       return res.status(500).json({ message: "Something went wrong." });
//     }
//     res
//       .status(200)
//       .json({ files, message: "Album cover names fetched fetched." });
//   });
// });

// app.get("/test", (req, res, next) => {
//   const filePath = path.join(
//     __dirname,
//     "images",
//     "cardi-b-invasion-of-privacy-album-art-2018-billboard-embed-compressed.jpg"
//   );

//   res.status(200).sendFile(filePath);
// });
