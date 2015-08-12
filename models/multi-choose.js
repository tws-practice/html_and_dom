var Topic = require('./topic.js');

function MultiChooseTopic(question,options,answer,score,input){
    Topic.call(this,'multi_choose',question,options,answer,score,input);
}

MultiChooseTopic.prototype = Object.create(Topic.prototype);
MultiChooseTopic.prototype.constructor = MultiChooseTopic;

MultiChooseTopic.prototype.mark = function(){

};




module.exports = MultiChooseTopic;