var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

<<<<<<< HEAD
/* GET Hello World page */
router.get('/helloworld', function(req,res) {
  res.render('helloworld', {title: 'Hello, World!' })
});

=======
>>>>>>> 80e584d1aa671a6c8761c71e4e6fba8135e30265
module.exports = router;
