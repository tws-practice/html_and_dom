function Subjective(inputs,answer){
  this.inputs = inputs;
  this.answer = answer;
}

Subjective.prototype.getInputsValues = function(){
  for(var i = 0;i < this.inputs.length;i++){
    this.inputs[i] = $('#'+this.inputs[i]);
  }
};

Subjective.prototype.checkAnswer = function(score){
  for(var i = 0;i < this.inputs.length;i++){
    if(this.inputs[i].val() === this.answer[i]){
      score.add(20);
    }
  }
};
