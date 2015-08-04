function MultiChoose(){

}

MultiChoose.checkAnwser = function(score){
  var multiChooseOne = document.getElementsByName('three-one');
  var multiChooseTwo = document.getElementsByName('three-two');

  if (multiChooseOne[0].checked && multiChooseOne[1].checked && !multiChooseOne[2].checked && multiChooseOne[3].checked) {
    score.add(10);
  }

  if (multiChooseTwo[0].checked && multiChooseTwo[1].checked && multiChooseTwo[2].checked && !multiChooseTwo[3].checked) {
    score.add(10);
  }
};
