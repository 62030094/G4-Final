var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello world');
});

router.get('/home', function(req, res, next) {
  res.render('covidR9',{x:''});
});




module.exports = router;
