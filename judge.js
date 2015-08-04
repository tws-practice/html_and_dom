function Judge(){

}

Judge.checkAnwser = function(score){
  var judgeOne = document.getElementsByName('four-one');
  var judgeTwo = document.getElementsByName('four-two');

  if (judgeOne[1].checked) {
    score.add(10);
  }
  if (judgeTwo[0].checked) {
    score.add(10);
  }
};
