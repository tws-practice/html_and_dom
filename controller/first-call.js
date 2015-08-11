var testPaper = require('../config/test-paper.json');
var topicFactory = require('../models/factory.js');

function firstCall(req, res) {
    var allTopic = [];
    
    for(var i = 0;i < testPaper.paper.length;i++){
        allTopic.push(topicFactory(testPaper.paper[i]));
    }
    console.log(allTopic);

    res.render('index',
        {
            score: '',
            className: '',
            idNumber: '',
            studentName: ''
        });
}


module.exports = firstCall;