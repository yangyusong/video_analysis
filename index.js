const path = require("path");

const express = require("express");
const app = express();
var http = require('http').Server(app);
const _ = require("underscore");
var Mock = require('mockjs');
const { get } = require('request');
let requests = require('request');
var crypto = require('crypto');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var contents = {};

//const viewsDir = path.join(__dirname, '')
//app.get('/video_face_tracking', (req, res) => res.sendFile(path.join(viewsDir, 'videoFaceTracking.html')))

//app.use(express.static(path.join(__dirname, 'public/')));
app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, '/weights')))
app.use('/libs', express.static('libs'));
app.use('/upload', express.static('upload'));
//app.use('/css', express.static('public/css'));

var mp4s = ["2019.mp4", "bbt.mp4"];
var mp4Index = 1;

app.get('/get/mid', function (req, res) {
    let requestData = '';
    let url = 'http://192.168.13.143:1098';

        responsebody = requests({
            url: url,
            method: "get",
            //json: true,
            //headers: {
            //    "content-type": "application/json",
            //},
            //body: JSON.stringify(requestData)
        }, function(error, response, body) {
            //console.log("response");
            //console.log(response);
            //console.log(body);
            if(error)
            console.log(error);
            if (!error && response.statusCode == 200) {
                //console.log("body");
                //console.log(body);
                //console.log(typeof body);
                var result = crypto.createHash('md5').update(body).digest("hex");
                //console.log(result);
                //console.log("result");
                var json = JSON.parse(body);
                //console.log("json");
                //console.log(json);
                json._id = result;
                res.json(json);
                return body
            }
        });

});

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

    var tags = Mock.mock({
        "array|1-2": ["no horizon", " man-made", "enclosed area", " cloth", "metal", "working", "plastic", " vertical components", "cluttered space"]
    });

    console.log("tags.array");
    console.log(tags.array);


    var safeObj = Mock.mock({"number|0-100": 1});
    var atmObj = Mock.mock({"number|0-100": 1});
    var scene_most = _.max(scenes, function(item){return item[0]});

    //console.log("id");
    //console.log(typeof req.query._id);
    //if(req.query._id == "NaN")
    //{
    //    req.query._id = 1;
    //}
    //console.log(req.query._id);
    contents =   {
        "atm": atmObj.number,
        "safe": safeObj.number,
        "type": "indoor",
        "scene": scenes,
        "video": "2019.mp4",
        "music": "xx.mp3",
        "scene_most": scene_most[1],
        "people": peopleObj.number,
        "tributes": _.uniq(tags.array)
    };
    var _id = crypto.createHash('md5').update(JSON.stringify(contents)).digest("hex")
    contents._id = _id;
    res.json(contents);

});


var server = http.listen(3100, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
});

function request(url, returnBuffer = true, timeout = 10000) {
    return new Promise(function(resolve, reject) {
        const options = Object.assign(
            {},
            {
                url,
                isBuffer: true,
                timeout,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'
                }
            },
            returnBuffer ? { encoding: null } : {}
        )

        get(options, function(err, res) {
            if (err) return reject(err)
            return resolve(res)
        })
    })
}
