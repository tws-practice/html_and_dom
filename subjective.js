function Subjective(){

}
Subjective.checkAnwser = function(score){
  var subjective = document.getElementById('five-one');

  if (subjective.value) {
    score.add(20);
  }
};
