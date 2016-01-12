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

  var queryURL = baseUrl + '4590+Macarthur+Newport+Beach+CA&destinations=' + newAddress + '+' + data.city + '+' + data.state +'&units=imperial'+ apiKey;

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
      var data = JSON.parse(body);
      var distanceData = data.rows[0].elements[0].distance.value;
      console.log(distanceData);
      var calculation = (distanceData/1609.34) * 0.50;
      var newCalculation = parseFloat(calculation).toFixed(2);
      console.log(newCalculation);
      res.send(newCalculation);
    } 
  });
});

module.exports = router;