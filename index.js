const path = require("path");

const express = require("express");
const app = express();
var http = require('http').Server(app);
const _ = require("underscore");
var Mock = require('mockjs')

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var contents = {};


//app.use(express.static(path.join(__dirname, 'public/')));
app.use('/public', express.static('public'));
app.use('/libs', express.static('libs'));
app.use('/upload', express.static('upload'));
//app.use('/css', express.static('public/css'));


app.get('/get/user', function (req, res) {
    res.json({xx: "hello"});
});

app.get('/get/exist_data', function(req, res){
    res.json(contents);
});

app.get('/get/data', function(req, res){

    var sceneLen = Mock.mock({
        "number|1-5": 5
    });


    var scenes = [];
    console.log(typeof sceneLen);
    console.log(req.query);
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


    var safeObj = Mock.mock({"number|0-100": 1});
    var atmObj = Mock.mock({"number|0-100": 1});
    var scene_most = _.max(scenes, function(item){return item[0]});

    contents =   {
        "_id": req.query._id,
        "atm": atmObj.number,
        "safe": safeObj.number,
        "type": "indoor",
        "scene": scenes,
        "scene_most": scene_most[1],
        "people": peopleObj.number,
        "tributes": ["no horizon", " man-made", "enclosed area", " cloth", "metal", "working", "plastic", " vertical components", "cluttered space"]
    };
    res.json(contents);

});


var server = http.listen(1234, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
});