var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var index = require('./routes/index');

app.use(bodyParser.json());

app.use("/", index);

var server = app.listen(3001, function(){
    var port = server.address().port;
    console.log("Listening on port: ", port);
});

app.use('/', index);
module.exports = app;

