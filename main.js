window.onload = function() {

};


function checkout() {
  var score = document.getElementById('score');

  var fibOne = document.getElementById('one-one');
  var fibTwo = document.getElementById('one-two');
  var fibThree = document.getElementById('one-three');
  var fibFour = document.getElementById('one-four');

  var chooseOne = document.getElementsByName('two-one');
  var chooseTwo = document.getElementsByName('two-two');

  var multiChooseOne = document.getElementsByName('three-one');
  var multiChooseTwo = document.getElementsByName('three-two');

  var judgeOne = document.getElementsByName('four-one');
  var judgeTwo = document.getElementsByName('four-two');

  var subjective = document.getElementById('five-one');

  var _class = document.getElementById('class');
  var idNumber = document.getElementById('id-number');
  var name = document.getElementById('name');

  var isError = false;
  if (!_class.value) {
    alert('请填写班级！');
    isError = true;
  }
  if (!idNumber.value) {
    alert('请填写学号！');
    isError = true;
  }
  if (!name.value) {
    alert('请填写姓名！');
    isError = true;
  }
  if (isError) {
    return false;
  }


  var number = 0;

  if (fibOne.value == '统一建模语言') {
    number += 5;
  }
  if (fibTwo.value == '封装性') {
    number += 5;
  }
  if (fibThree.value == '继承性') {
    number += 5;
  }
  if (fibFour.value == '多态性') {
    number += 5;
  }

  if (chooseOne[0].checked) {
    number += 10;
  }
  if (chooseTwo[0].checked) {
    number += 10;
  }

  if (multiChooseOne[0].checked && multiChooseOne[1].checked && !multiChooseOne[2].checked && multiChooseOne[3].checked) {
    number += 10;
  }

  if (multiChooseTwo[0].checked && multiChooseTwo[1].checked && multiChooseTwo[2].checked && !multiChooseTwo[3].checked) {
    number += 10;
  }

  if (judgeOne[1].checked) {
    number += 10;
  }
  if (judgeTwo[0].checked) {
    number += 10;
  }

  if (subjective.value) {
    number += 20;
  }
  alert('爽快的得到'+ number +'分!!!');



  score.value = number;
}
