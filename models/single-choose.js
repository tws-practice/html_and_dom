var Topic = require('./topic.js');

function SingleChooseTopic(question,options,answer,score,input){
    Topic.call(this,'single-choose',question,options,answer,score,input);
}

SingleChooseTopic.prototype = Object.create(Topic.prototype);
SingleChooseTopic.prototype.constructor = SingleChooseTopic;

SingleChooseTopic.prototype.getScore = function(){

};



module.exports = SingleChooseTopic;