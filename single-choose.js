function SingleChoose(){

}

SingleChoose.checkAnwser = function(score){
  var chooseOne = document.getElementsByName('two-one');
  var chooseTwo = document.getElementsByName('two-two');

  if (chooseOne[0].checked) {
    score.add(10);
  }
  if (chooseTwo[0].checked) {
    score.add(10);
  }

};
