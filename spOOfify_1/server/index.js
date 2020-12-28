require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const { errorHandler } = require("./controllers/errorHandler");
const albumRoutes = require("./routes/albumRoutes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/albums", albumRoutes);
app.use(errorHandler);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log(
      `Database connection to collection "${process.env.DB_COLLECTION}" established successfully...`
    );
    console.log(`Setting up the server on port ${process.env.SERVER_PORT}...`);
    app.listen(process.env.SERVER_PORT, () =>
      console.log(`Server is listening on port ${process.env.SERVER_PORT}...`)
    );
  })
  .catch((err) => console.log(err));
