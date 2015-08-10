function SingleChoose(data,jsonFile){
    this.inputs = this.getInputs(data);
    this.answer = this.getAnswer(jsonFile);
}


SingleChoose.prototype.getInputs = function(data){
    var inputs = [];

    for(var i = 0;i < Object.getOwnPropertyNames(data).length; i++){
        if(data['single_choose'+i]){
            inputs.push(data['single_choose'+i]);
        } else {
            inputs.push('');
        }
    }

    return inputs;
};

SingleChoose.prototype.getAnswer = function(jsonFile){
    var detail = jsonFile.questions.single_choose.detail;
    var answer = [];

    for(var i = 0;i < detail.length; i++){
        answer.push(detail[i].answer);
    }
    return answer;
};

SingleChoose.prototype.checkAnswer = function(score){
    for(var i = 0;i < this.answer.length;i++){
       if(this.inputs[i] === this.answer[i]){
           score.add(10);
       }
    }
};










module.exports = SingleChoose;