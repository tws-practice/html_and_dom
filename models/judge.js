function JudgeTopic(question,options,answer,score,input){
    Topic.call(this,'Judge',question,options,answer,score,input);
}

JudgeTopic.prototype = Object.create(Topic.prototype);
JudgeTopic.prototype.constructor = JudgeTopic;

JudgeTopic.prototype.getScore = function(){

};



module.exports = JudgeTopic;