'use strict';

var express = require('express');
var Stamper = require('stamper');

var app = express();
var stamper = new Stamper();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
  next();
});

app.get('/:id', function (req, res) {
  var id = req.params.id;
  res.send(stamper.getTimestamp(id));
});


var port = process.env.PORT || 8080;
app.listen(port,  function () {
  console.log('Node.js listening on port ' + port + '...');
});
