function Judge(data,jsonFile){
    this.inputs = this.getInputs(data);
    this.answer = this.getAnswer(jsonFile);
}

Judge.prototype.getInputs = function(data){
    var inputs = [];

    for(var i = 0;i < Object.getOwnPropertyNames(data).length; i++){
        if(data['judge'+i]){
            inputs.push(data['judge'+i]);
        } else {
            inputs.push('');
        }
    }

    return inputs;
};

Judge.prototype.getAnswer = function(jsonFile){
    var detail = jsonFile.questions.judge.detail;
    var answer = [];

    for(var i = 0;i < detail.length; i++){
        answer.push(detail[i].answer);
    }
    return answer;
};

Judge.prototype.checkAnswer = function(score){
    for(var i = 0;i < this.answer.length;i++){
        if(this.inputs[i] === this.answer[i]){
            score.add(10);
        }
    }
};































module.exports = Judge;