const express = require("express");
const app = express();

//configuring dotenv
require("dotenv").config();
// try ... catch - avoiding usage
require("express-async-errors");

//connect DB
const connectDB = require("./db/connect");

//optional
require("colors");

const PORT = 8000;

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`.green)
    );
    await connectDB(process.env.MONGO_URI);
    if (connectDB) {
      console.log("Successfully Connected To The DB!".green);
    }
  } catch (error) {
    if (error) {
      console.log(error);
      console.log("|||--CAUGHT A CONNECT_DB ERROR OR A SERVER ERROR--|||".red);
    }
  }
};

module.exports = {
  start,
};
