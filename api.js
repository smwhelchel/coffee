var express = require('express'),
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
var parseJson = bodyParser.json();
var router = express.Router();

var baseUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?';
var apiKey = 'AIzaSyAlv3a7kpElhJ4aTbPSiGjYKC5T2KMF7pQ';

router.post('/', parseJson, function(req, res) {

  query = req.body.query;
  queryURL = baseUrl + query + '&api-key=' + apiKey;

  request(queryURL, function (error, response, body) {
    
    if (error) {
      return console.log('error');
    }

    if (response.statusCode !== 200) {
      return console.log('status code wrong');
    }

    if (!error && response.statusCode == 200) {
      console.log('server works');
      res.send(JSON.parse(body).response);
    }
  });
});

module.exports = router;