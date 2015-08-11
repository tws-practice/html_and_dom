var Topic = require('./topic.js');

function SubjectiveTopic(question,options,answer,score,input){
    Topic.call(this,'subjective',question,options,answer,score,input);
}

SubjectiveTopic.prototype = Object.create(Topic.prototype);
SubjectiveTopic.prototype.constructor = SubjectiveTopic;

SubjectiveTopic.prototype.getScore = function(){

};



module.exports = SubjectiveTopic;