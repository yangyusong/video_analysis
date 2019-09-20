const path = require("path");

const express = require("express");
const app = express();
var http = require('http').Server(app);
const _ = require("underscore");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//app.use(express.static(path.join(__dirname, 'public/')));
app.use('/public', express.static('public'));
app.use('/libs', express.static('libs'));
app.use('/upload', express.static('upload'));
//app.use('/css', express.static('public/css'));


app.get('/get/user', function (req, res) {
    res.json({xx: "hello"});
});


var server = http.listen(1234, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
});