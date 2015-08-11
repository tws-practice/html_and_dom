var express = require('express');
var router = express.Router();
var Score = require('../controller/score.js');
var dataFeedBack = require('../controller/data-feed-back.js');
var jsonFile = require('../data.json');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index',
        {
            score: '',
            className: '',
            idNumber: '',
            studentName: '',
            fill_in_blanks_detail:''
        });
});

router.post('/', function (req, res) {
    var data = req.body;

    var score = new Score(data);
    score.calculate();

    var feedBackJson = dataFeedBack(data,jsonFile);

    res.render('index',
        {
            score: score.score,
            className: data.className,
            idNumber: data.idNumber,
            studentName: data.studentName,
            fill_in_blanks_detail:feedBackJson.questions.fill_in_blanks.detail
            //single_choose_detail:feedBackJson.questions.single_choose.detail,
            //multi_choose_detail:feedBackJson.questions.multi_choose.detail,
            //judge_detail:feedBackJson.questions.judge.detail,
            //subjective_detail:feedBackJson.questions.subjective.detail
        });
});


module.exports = router;
