var express = require('express');
var router = express.Router();

// var mongoose = require('mongoose');
// const User = mongoose.model('user');

// mongoose.connect('mongodb://127.0.0.1:27017/test');
// var Kitten = mongoose.model('cba',{name: String});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express2' });
});


module.exports = router;
