var express = require('express');
var router = express.Router();

/* GET about. */
router.get('/about', function (req, res, next) {
    res.render('about', { error: false });
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { error: false });
});

module.exports = router;