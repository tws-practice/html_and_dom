function SingleChoose(inputs,answer){
  this.inputs = inputs;
  this.answer = answer;
}

SingleChoose.prototype.getInputsValues = function(){
  for(var i = 0;i < this.inputs.length;i++){
    this.inputs[i] = $('body').find("input[name|="+this.inputs[i]+"]");
  }
};

SingleChoose.prototype.checkAnswer = function(score){
  for(var i = 0;i < this.inputs.length;i++){
    for(var x = 0;x <this.inputs[i].length;x++){
      if(this.inputs[i][x].checked && this.inputs[i][x].value === this.answer[i]){
        score.add(10);
      }
    }
  }
};
