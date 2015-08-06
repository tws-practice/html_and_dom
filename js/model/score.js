function Score(){
  this.score = 0;
}

Score.prototype.add =function(number){
  this.score += number;
};

Score.prototype.showScore = function(){
  document.getElementById('score').value = this.score;
};
