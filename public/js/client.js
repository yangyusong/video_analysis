/**
 * Created by yys on 2019/2/4.
 */
var client = {};

client.online = true;
client.devHost = "http://localhost:3100/get/";//开发中 等待服务器先上线才能改
client.defaultHost = "http://localhost:3100/get/";
if(client.online)
{
    client.devHost = "http://192.168.13.180:3100/get/";//开发中 等待服务器先上线才能改
    client.defaultHost = "http://192.168.13.180:3100/get/";
}

client.host = client.devHost;
client.debug = false;
client.demoData = false;
//client.demoData = true;
client.mid = "mid";
client.exist = "exist_data";
client.newData = "data";
if(!client.demoData)
{
    client.exist = client.mid;
    client.newData = client.mid;
}
client.data = {};

if(client.debug)
{
    client.host = client.defaultHost;
}


client.post = function (url, data,  callback) {
    $.ajax({
        // timeout: 5000,
        url: url,
        type: 'post',
        data: data
    })
        .done(
        function (json) {
            if (client.debug) {
                console.log(json);
            }
            callback(json);
        })
        .fail(function (json) {
            if (client.debug) {
                console.log(json);
            }
            callback(json);
        });
};

client.get = function (url, data, callback) {
    $.ajax({
        // timeout: 5000,
        url: url,
        type: 'get',
        data: data
    })
        .done(
        function (json) {
            if (client.debug) {
                console.log(json);
            }
            callback(json);
        })
        .fail(function (json) {
            if (client.debug) {
                console.log(json);
            }
            callback(json);
        });
};

client.jsonp = function (url, data, callback, param) {
    var reqObj = {
        // timeout: 10000,
        url: url,
        data: data,
        dataType: 'jsonp',
        // jsonpCallback: callback,
        output: 'json',
        cache: true,//可能会不实时
        crossDomain: true,
        error: function (e) {
            console.log(e);
        },
        success: function (data) {
            callback instanceof Function && callback(data, param);
            (typeof callback === "string") && window[callback](data, param);
        }
    };
    $.ajax(reqObj);
}