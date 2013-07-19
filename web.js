var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var greeting = fs.readFileSync("index.html").toString();

app.get('/', function (request, response) {
    response.send(greeting);
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});
