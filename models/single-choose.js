var Topic = require('./topic.js');

function SingleChooseTopic(question,options,answer,score,input){
    Topic.call(this,'single_choose',question,options,answer,score,input);
}

SingleChooseTopic.prototype = Object.create(Topic.prototype);
SingleChooseTopic.prototype.constructor = SingleChooseTopic;

SingleChooseTopic.prototype.mark = function(){

};



module.exports = SingleChooseTopic;