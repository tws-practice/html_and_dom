function FillInBlanks(inputs,anwser){
  this.inputs = inputs;
  this.anwser = anwser;
}

FillInBlanks.prototype.getInputsValues = function(){
  for(var i = 0;i < this.inputs.length;i++){
    for(var x = 0;x < this.inputs[i].length;x++){
      this.inputs[i][x] = ($('#'+this.inputs[i][x]).val());
    }
  }
};


FillInBlanks.prototype.checkAnwser = function(score){
  for(var i = 0;i < this.inputs.length;i++){
    for(var x = 0;x < this.anwser[i].length;x++){
      if(this.anwser[i].indexOf(this.inputs[i][x])!==-1){
        this.anwser[i].splice(this.anwser[i].indexOf(this.inputs[i][x]),1);
        score.add(5);
      }
    }
  }
};
