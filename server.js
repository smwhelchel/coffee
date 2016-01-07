var express = require('express');
var app = express();
var post = require('./post.js');
var api = require('./api.js');
var bodyParser = require('body-parser')

app.use('/api', api);

app.use('/post', post);

app.use(express.static('public'));

app.use('/post', bodyParser.json(), function (req, res) {
  console.log(JSON.stringify(req.body, null, 2));
});

app.listen(1337);
console.log('server listening');

