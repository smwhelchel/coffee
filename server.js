var express = require('express');
var app = express();
var post = require('./post.js');
var api = require('./post.js');
var bodyParser = require('body-parser')

app.use('/api', api);

app.use('/post', post);

app.use(express.static('public'));


app.listen(1337);
console.log('server listening');

