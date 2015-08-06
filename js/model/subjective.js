function Subjective(inputs,anwser){
  this.inputs = inputs;
  this.anwser = anwser;
}

Subjective.prototype.getInputsValues = function(){
  for(var i = 0;i < this.inputs.length;i++){
    this.inputs[i] = $('#'+this.inputs[i]);
  }
};

Subjective.prototype.checkAnwser = function(score){
  for(var i = 0;i < this.inputs.length;i++){
    if(this.inputs[i].val() === this.anwser[i]){
      score.add(20);
    }
  }
};
