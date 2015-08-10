function Subjective(data,jsonFile){
    this.inputs = this.getInputs(data);
    this.answer = this.getAnswer(jsonFile);
}


Subjective.prototype.getInputs = function(data){
    var inputs = [];

    for(var i = 0;i < Object.getOwnPropertyNames(data).length; i++){
        if(data['subjective'+i]){
            inputs.push(data['subjective'+i]);
        } else {
            inputs.push('');
        }
    }

    return inputs;
};

Subjective.prototype.getAnswer = function(jsonFile){
    var detail = jsonFile.questions.subjective.detail;
    var answer = [];

    for(var i = 0;i < detail.length; i++){
        answer.push(detail[i].answer);
    }
    return answer;
};

Subjective.prototype.checkAnswer = function(score){
    for(var i = 0;i < this.answer.length;i++){
        if(this.inputs[i] === this.answer[i]){
            score.add(20);
        }
    }
};























module.exports = Subjective;