var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var parseJson = bodyParser.json();
var router = express.Router();

var baseUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=';
var apiKey = '&key=AIzaSyAExX9EcfkDPFYKOX2VUcd8N4oIHR41wfQ';

router.post('/', bodyParser.json(), function (req, res) {
  var data = req.body;
    var newAddress = data.address.replace(/\s+/g, '+');

  queryURL = baseUrl + '4590+Macarthur+Newport+Beach+CA&destinations=' + newAddress + '+' + data.city + '+' + data.state +'&units=imperial'+ apiKey;

  request(queryURL, function (error, response, body) {
     console.log(body);
    if (error) {
      return console.log('error');
    }

    if (response.statusCode !== 200) {
      return console.log('status code wrong');
    }

    if (!error && response.statusCode == 200) {
      console.log('server works');
      res.send(JSON.parse(body).response);
      console.log(body);
    } 
    var distanceData = body[2][0][0][0].value;
    console.log(distanceData);
  });
});

module.exports = router;