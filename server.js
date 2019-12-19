//  initialize express
var express = require('express');
var app = express();

// set port to 5000 for Heroku
var PORT = process.env.PORT || 5000;

// app use the files in the public folder for serving to front-end 
app.use(express.static(__dirname + '/public'));

// use the routes in this folder for URL structure
require('./routes/index.js')(app)

app.listen(PORT, function() {
    console.log("Server is listening on" + PORT);
});

