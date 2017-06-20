var Topic = require('./topic.js');

function JudgeTopic(question,options,answer,score,input){
    Topic.call(this,'judge',question,options,answer,score,input);
}

JudgeTopic.prototype = Object.create(Topic.prototype);
JudgeTopic.prototype.constructor = JudgeTopic;

JudgeTopic.prototype.mark = function(){
    var score = 0;

    if(this.answer === this.input){
        score += this.score;
    }

    return score;
};



module.exports = JudgeTopic;