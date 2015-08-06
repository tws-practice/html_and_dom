function MultiChoose(inputs,answer){
  this.inputs = inputs;
  this.answer = answer;
}

MultiChoose.prototype.getInputsValues = function(){
  for(var i = 0;i < this.inputs.length;i++){
    this.inputs[i] = $('body').find("input[name|="+this.inputs[i]+"]");
  }
};

MultiChoose.prototype.checkAnswer = function(score){
  for(var i = 0;i < this.inputs.length;i++){
    var inputString = '';
    for(var x =0;x < this.inputs[i].length;x++){
      if(this.inputs[i][x].checked){
        inputString += this.inputs[i][x].value;
      }
    }
    if(inputString === this.answer[i]){
      score.add(10);
    }
  }
};
