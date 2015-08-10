function MultiChoose(data,jsonFile){
    this.inputs = this.getInputs(data);
    this.answer = this.getAnswer(jsonFile);
}


MultiChoose.prototype.getInputs = function(data){
    var inputs = [];

    for(var i = 0;i < Object.getOwnPropertyNames(data).length; i++){
        if(data['multi_choose'+i]){
            if(data['multi_choose'+i].length > 1) {
                inputs.push(data['multi_choose' + i].reduce(function (a, b) {
                    return a + b;
                }));
            } else {
                inputs.push(data['multi_choose'+i][0]);
            }
        } else {
            inputs.push('');
        }
    }

    return inputs;
};

MultiChoose.prototype.getAnswer = function(jsonFile){
    var detail = jsonFile.questions.multi_choose.detail;
    var answer = [];

    for(var i = 0;i < detail.length; i++){
        answer.push(detail[i].answer);
    }
    return answer;
};

MultiChoose.prototype.checkAnswer = function(score){
    for(var i = 0;i < this.answer.length;i++){
        if(this.inputs[i] === this.answer[i]){
            score.add(10);
        }
    }
};




























module.exports = MultiChoose;