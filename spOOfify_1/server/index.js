const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const directoryPath = path.join(__dirname, "images");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ message: "Something went wrong." });
    }
    res
      .status(200)
      .json({ files, message: "Album cover names fetched fetched." });
  });
});

app.listen(8080, () => console.log(`Server is listening on port 5050...`));
