var Topic = require('./topic.js');

function SingleChooseTopic(question,options,answer,score,input){
    Topic.call(this,'single_choose',question,options,answer,score,input);
}

SingleChooseTopic.prototype = Object.create(Topic.prototype);
SingleChooseTopic.prototype.constructor = SingleChooseTopic;

SingleChooseTopic.prototype.mark = function(){
    var score = 0;

    if(this.answer === this.input){
        score += this.score;
    }

    return score;
};



module.exports = SingleChooseTopic;