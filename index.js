var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('SOUND CLUB LIVE!');
});

app.listen(46000, function () {
  console.log('Example app listening on port 46000!');
});
