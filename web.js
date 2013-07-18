var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());

var readContentFromFile = function(callback) {
    fs.readFile("index.html", function (err, data) {
        if (err) {
            throw err
        }
        callback(data);
    })
};

readContentFromFile(function(data) {
    var greeting = data.toString();
    app.get('/', function (request, response) {
        response.send(greeting);
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});
