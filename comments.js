// Create web server 

var express = require('express');
var router = express.Router();

// This will be our data store
var comments = [];

// Route for path: /comments
router.get('/', function(req, res, next) {
  res.json(comments);
});

// Route for path: /comments
router.post('/', function(req, res, next) {
  comments.push(req.body);
  res.json(comments);
});

module.exports = router;