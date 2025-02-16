const express = require("express");
const app = express();
const { start } = require("./server");

// Packages: Security checks etc Imports
const cors = require("cors");
const xss = require("xss-clean");
const helmet = require("helmet");
// const { sendEmail } = require("./controllers/sendEmail");

//  routers

// middleware imports

// routes App

// DEFAULT MIDDLEWARE & SECURITY

//security
app.use(cors());
app.use(xss());
app.use(helmet()); // enables security headers

//default midd
app.use(express.static("../client/public"));
app.use(express.json());

// middleware

app.post("/submit", async (req, res) => {
  console.log("Received info: ", req.body);
  //   try {
  //     await sendEmail(req, res);
  //   } catch (error) {
  //     console.error("Error in /submit:", error);
  //     res.status(500).json({ message: "Internal Server Error" });
  //   }
  res.status(500).json({ message: "Internal Server Error" });
});

// runnig the server DB
start();
