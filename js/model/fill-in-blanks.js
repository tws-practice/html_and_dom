function FillInBlanks(inputs,answer){
  this.inputs = inputs;
  this.answer = answer;
}

FillInBlanks.prototype.getInputsValues = function(){
  for(var i = 0;i < this.inputs.length;i++){
    for(var x = 0;x < this.inputs[i].length;x++){
      this.inputs[i][x] = ($('#'+this.inputs[i][x]).val());
    }
  }
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