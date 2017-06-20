var Topic = require('./topic.js');
var _ = require('lodash');

function FillInBlanksTopic(question,options,answer,score,input){
    Topic.call(this,'fill_in_blanks',question,options,answer,score,input);
}

FillInBlanksTopic.prototype = Object.create(Topic.prototype);
FillInBlanksTopic.prototype.constructor = FillInBlanksTopic;

FillInBlanksTopic.prototype.mark = function(){
    var score = 0;

    if(!Array.isArray(this.input)){
        if(this.answer.indexOf(this.input) !== -1){
            score += this.score;
        }
    } else {
        score += _.intersection(this.answer,this.input).length * this.score;
    }
    return score;
};


module.exports = FillInBlanksTopic;