
const express = require('express');
const app = express();
const {start} = require("./server");

// Packages: Security checks etc Imports
const cors = require('cors');
const xss = require("xss-clean");
const helmet = require("helmet")



//  routers


// middleware imports


// routes App



// DEFAULT MIDDLEWARE & SECURITY 

//security 
app.use(cors())
app.use(xss());
app.use(helmet()); // enables security headers



//default midd
app.use(express.static('../client/public'))
app.use(express.json());

// middleware






// runnig the server DB
start();


