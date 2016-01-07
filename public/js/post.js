var express = require('express');
var app = express();
var router = express.Router();

var route = require ('/app.js');

app.use(route);

app.get('/cart', function(req, res) {
  res.sendFile(path.join(__dirname + '/'));
});

app.listen(1337);
console.log('server listening');

module.exports = router;