function getInput(data,allTopic){
    for(var topic in allTopic){
        for(var i = 0;i < allTopic[topic].length; i++){
            if(data[allTopic[topic][i].type + i]) {
                allTopic[topic][i].input = data[allTopic[topic][i].type + i];
            }
        }
    }

    return allTopic;
}


module.exports = getInput;