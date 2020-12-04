var express = require('express');
var router = express.Router();

/* GET about. */
router.get('/about', function (req, res, next) {
    res.render('about', { 
        error: false, 
        title: "ClimateReps - About",
        path: req.path
    });
});

/* GET about. */
router.get('/question-answers', function (req, res, next) {
    res.render('question-answers', { 
        error: false, 
        title: "ClimateReps - Question & Answers",
        path: req.path
    });
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
         error: false, 
         title: "ClimateReps - The first open climate democracy website",
         path: req.path
    });
});

module.exports = router;