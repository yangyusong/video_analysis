const path = require("path");

const express = require("express");
const app = express();
var http = require('http').Server(app);
const _ = require("underscore");
var Mock = require('mockjs')

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

app.get('/get/data', function(req, res){

    var sceneLen = Mock.mock({
        "number|1-5": 5
    });


    var scenes = [];
    console.log(typeof sceneLen);
    var scenesWords = ["pet_shop", "fire_station", "server_room", " toyshop", "beauty_salon" ];
    var objS = {};
    for(var i = 0; i < sceneLen.number; i++)
    {
        var obj = Mock.mock({
            "number|1-4": 4
        });
        var s = scenesWords[i];

        objS[scenesWords[obj.number]] = s;

    }

    for(var j in objS)
    {
        var num = Mock.mock({
            "number|0.3": 1
        });

        scenes.push(
            [num.number, j]
        );
    }

    var peopleObj = Mock.mock({
        "number|1-100": 1
    });


    res.json(
        {
            "type": "indoor",
            "scene": scenes,
            "people": peopleObj.number,
            "tributes": ["no horizon", " man-made", "enclosed area", " cloth", "metal", "working", "plastic", " vertical components", "cluttered space"]
        }
    );

});


var server = http.listen(1234, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
});