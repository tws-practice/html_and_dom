var express = require('express');
var router = express.Router();
var Score = require('../controller/score.js');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index',
        {
            score: '',
            className: '',
            idNumber: '',
            studentName: ''
        });
});

router.post('/', function (req, res) {
    var data = req.body;
    console.log(data);
    var score = new Score(data);
    res.render('index',
        {
            score: score.score,
            className: data.className,
            idNumber: data.idNumber,
            studentName: data.studentName
        });
});


module.exports = router;
