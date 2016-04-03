'use strict';

var express = require('express');
// var session = require('express-session');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
  next();
});

app.get('/:id', function (req, res) {
  var id = req.params.id;
  res.send(id);
});


var port = process.env.PORT || 8080;
app.listen(port,  function () {
  console.log('Node.js listening on port ' + port + '...');
});
