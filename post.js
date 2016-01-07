var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('found');
  console.log('server found');
});

module.exports = router;