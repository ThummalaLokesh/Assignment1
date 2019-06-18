/* 
    File name = index.js
    Author's name = Lokesh Thummala
    web site name = lokesh-thummala-portfolio
    file description = This is main index javascript file to my webpage. It has routing to  the website 
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lokesh Thummala' });
});

module.exports = router;
