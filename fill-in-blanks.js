function FillInBlanks(){

}

FillInBlanks.checkAnwser = function(score){
  var fibOne = document.getElementById('one-one').value;
  if (fibOne === '统一建模语言') {
    score.add(5);
  }

  var fibTwo = [document.getElementById('one-two').value,
                document.getElementById('one-three').value,
                document.getElementById('one-four').value];
  var fibTwoAnwser = ['封装性','继承性','多态性'];
  var rightAnwser = 0;

  fibTwo.forEach(function(oneAnwser){
    if(fibTwoAnwser.indexOf(oneAnwser)!==-1){
      rightAnwser++;
    }
  });
  score.add(rightAnwser*5)
};
