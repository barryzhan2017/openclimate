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

/* GET Q&A. */
router.get('/question-answers', function (req, res, next) {
    res.render('question-answers', { 
        error: false, 
        title: "ClimateReps - Question & Answers",
        path: req.path
    });
});

/* GET Submit bug. */
router.get('/submit-bug', function (req, res, next) {
    res.render('submit-bug', { 
        error: false, 
        title: "ClimateReps - Submit a bug ",
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