var Topic = require('./topic.js');

function FillInBlanksTopic(question,options,answer,score,input){
    Topic.call(this,'fill_in_blanks',question,options,answer,score,input);
}

FillInBlanksTopic.prototype = Object.create(Topic.prototype);
FillInBlanksTopic.prototype.constructor = FillInBlanksTopic;

FillInBlanksTopic.prototype.mark = function(){
    
};


module.exports = FillInBlanksTopic;