function Score(){
    this.score = 0;
}


Score.prototype.markAll = function(allTopic){
    for(var topic in allTopic){
        for(var i = 0;i < allTopic[topic].length; i++){
            this.score += allTopic[topic][i].mark();
        }
    }
};






module.exports = Score;