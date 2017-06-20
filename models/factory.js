var FillInBlanksTopic = require('./fill-in-blanks.js');
var JudgeTopic = require('./judge.js');
var MultiChooseTopic = require('./multi-choose.js');
var SingleChooseTopic = require('./single-choose.js');
var SubjectiveTopic = require('./subjective.js');

function topicFactory(oneTopic) {
    var type = oneTopic.type;

    if (type === 'fill_in_blanks') {
        return new FillInBlanksTopic(oneTopic.question, oneTopic.options, oneTopic.answer, oneTopic.score, oneTopic.input);
    } else if (type === 'single_choose') {
        return new SingleChooseTopic(oneTopic.question, oneTopic.options, oneTopic.answer, oneTopic.score, oneTopic.input);
    } else if (type === 'multi_choose') {
        return new MultiChooseTopic(oneTopic.question, oneTopic.options, oneTopic.answer, oneTopic.score, oneTopic.input);
    } else if (type === 'judge') {
        return new JudgeTopic(oneTopic.question, oneTopic.options, oneTopic.answer, oneTopic.score, oneTopic.input);
    } else if (type === 'subjective') {
        return new SubjectiveTopic(oneTopic.question, oneTopic.options, oneTopic.answer, oneTopic.score, oneTopic.input);
    }
}




module.exports = topicFactory;