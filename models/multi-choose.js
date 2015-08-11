function MultiChooseTopic(question,options,answer,score,input){
    Topic.call(this,'multi-choose',question,options,answer,score,input);
}

MultiChooseTopic.prototype = Object.create(Topic.prototype);
MultiChooseTopic.prototype.constructor = MultiChooseTopic;

MultiChooseTopic.prototype.getScore = function(){

};




module.exports = MultiChooseTopic;