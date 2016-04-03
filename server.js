'use strict';

var express = require('express');
// var session = require('express-session');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
  next();
});


var port = process.env.PORT || 8080;
app.listen(port,  function () {
  console.log('Node.js listening on port ' + port + '...');
});
