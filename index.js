// fetch all environmental variables
require('dotenv').config()
// import all requires
const express = require("express");
const ejs = require('ejs');
const axios = require("axios");
// instantiate app
const app = express()
// set port
const PORT = process.env.PORT || 8080;
const API_BASE = process.env.API_BASE;
// start the server

app.set('view engine', 'ejs');
app.get('/', function(req, res){
    res.render('pages/index');
});

app.get('/about', function(req, res){
    res.render('pages/about');
});

app.listen(PORT, () => console.log("Server running..."));
console.log('Server is listening on port 8080');