var express = require('express');
var harborDominos = require('./index.js');
var app = express();

app.get('/order/dominos', function (req, res) {
  harborDominos.orderDominos();
  res.send('Dominos ordered!');
});

app.listen(3000, function () {
  console.log('HarborDominos on port 3000!');
});
