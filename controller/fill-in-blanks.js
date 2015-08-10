function FillInBlanks(data,jsonFile){
    this.inputs = this.getInputs(data);
    this.answer = this.getAnswer(jsonFile);
}


FillInBlanks.prototype.getInputs = function(data){
    var inputs = [];

    for(var key in data){
        if(key.indexOf('fill_in_blanks') !== -1){
            if(Array.isArray(data[key])){
                inputs.push(data[key]);
            } else {
                inputs.push([data[key]]);
            }

        }
    }

    return inputs;
};

FillInBlanks.prototype.getAnswer = function(jsonFile){
    var fib = jsonFile.questions.fill_in_blanks.detail;
    var answer = [];

    for(var i = 0;i < fib.length; i++){
        answer.push(fib[i].answer);
    }
    return answer;
};


FillInBlanks.prototype.checkAnswer = function(score){
    this.eliminateDuplicate();

    for(var i = 0;i < this.inputs.length;i++){
        for(var x = 0;x < this.answer[i].length;x++){
            if(this.answer[i].indexOf(this.inputs[i][x])!==-1){
                score.add(5);
            }
        }
    }
};

FillInBlanks.prototype.eliminateDuplicate = function(){
    for(var i = 0;i < this.inputs.length;i++){
        for(var x = 0;x < this.inputs[i].length;x++){
            if(this.inputs[i].lastIndexOf(this.inputs[i][x])!== x){
                this.inputs[i].splice(x,1);
                x--;
            }
        }
    }
};



module.exports = FillInBlanks;