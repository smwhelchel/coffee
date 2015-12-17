var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/../index.html'));
// });

// app.use('/images', express.static('../images'));

// app.use('/css', express.static('../css'));



app.listen(1337);
console.log('server listening');