//  initialize express
var express = require('express');

// initialize app variable
var app = express();

// set port for Heroku
var PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

// use the routes in this folder for URL structure
require('./routes/index.js')(app)

// lisiten on a port
app.listen(PORT, function () {
    console.log("Server is listening on " + PORT);
});