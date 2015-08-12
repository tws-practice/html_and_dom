var Topic = require('./topic.js');

function JudgeTopic(question,options,answer,score,input){
    Topic.call(this,'judge',question,options,answer,score,input);
}

JudgeTopic.prototype = Object.create(Topic.prototype);
JudgeTopic.prototype.constructor = JudgeTopic;

JudgeTopic.prototype.mark = function(){

};



module.exports = JudgeTopic;