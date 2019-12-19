// initializing routes
var express = require('express');
var path = require('path');
var app = express();

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

    app.get('/login', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/login.html'));
    });

    app.get('/sign-up', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/signup.html'));
    });
};