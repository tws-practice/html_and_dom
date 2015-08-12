var Topic = require('./topic.js');

function MultiChooseTopic(question,options,answer,score,input){
    Topic.call(this,'multi_choose',question,options,answer,score,input);
}

MultiChooseTopic.prototype = Object.create(Topic.prototype);
MultiChooseTopic.prototype.constructor = MultiChooseTopic;

MultiChooseTopic.prototype.mark = function(){
    var score = 0;

    if(Array.isArray(this.input)){
        var inputString = this.input.reduce(function(a, b) {
            return a + b;
        });
        if(inputString === this.answer){
            score += this.score;
        }
    }

    return score;
};




module.exports = MultiChooseTopic;