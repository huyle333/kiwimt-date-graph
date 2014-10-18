var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page */
router.get('/helloworld', function(req,res) {
  res.render('helloworld', {title: 'Hello, World!' })
});

/* GET dates */
router.get('/dates', function(req,res) {
  res.render('dates', {title: 'dates'})
});

module.exports = router;
