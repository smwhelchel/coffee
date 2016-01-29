var express = require('express');
var app = express();
var post = require('./post.js');
var api = require('./post.js');
var bodyParser = require('body-parser')

app.use('/api', api);

app.use('/post', post);

app.use(express.static('public'));

var port = process.env.PORT || 3000;
app.listen(port);
console.log('server listening');

