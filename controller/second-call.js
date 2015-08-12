var testPaper = require('../config/test-paper.json');
var topicFactory = require('../models/factory.js');
var getInput = require('../models/get-input');

function secondCall(req,res){
    var data = req.body;
    console.log(data);

    var allTopic = {
        fill_in_blanks:[],
        single_choose:[],
        multi_choose:[],
        judge:[],
        subjective:[]
    };

    for (var i = 0; i < testPaper.paper.length; i++) {
        if (testPaper.paper[i].type === 'fill_in_blanks') {
            allTopic.fill_in_blanks.push(topicFactory(testPaper.paper[i]));
        } else if (testPaper.paper[i].type === 'single_choose') {
            allTopic.single_choose.push(topicFactory(testPaper.paper[i]));
        } else if (testPaper.paper[i].type === 'multi_choose') {
            allTopic.multi_choose.push(topicFactory(testPaper.paper[i]));
        } else if (testPaper.paper[i].type === 'judge') {
            allTopic.judge.push(topicFactory(testPaper.paper[i]));
        } else if (testPaper.paper[i].type === 'subjective') {
            allTopic.subjective.push(topicFactory(testPaper.paper[i]));
        }

    }

    allTopic = getInput(data,allTopic);

    res.render('index',
        {
            score: '',
            className: data.className,
            idNumber: data.idNumber,
            studentName: data.studentName,
            allTopic:allTopic
        });
}
















module.exports = secondCall;