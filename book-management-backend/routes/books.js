var express = require('express');
var router = express.Router();
var books_collection = require('./books-collection.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(books_collection.slice(12*req.query.index,12*req.query.index+12));
});

module.exports = router;
