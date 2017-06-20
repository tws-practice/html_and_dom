var Topic = require('./topic.js');

function SubjectiveTopic(question,options,answer,score,input){
    Topic.call(this,'subjective',question,options,answer,score,input);
}

SubjectiveTopic.prototype = Object.create(Topic.prototype);
SubjectiveTopic.prototype.constructor = SubjectiveTopic;

SubjectiveTopic.prototype.mark = function(){
    var score = 0;

    if(this.answer === this.input){
        score += this.score;
    }

    return score;
};



module.exports = SubjectiveTopic;