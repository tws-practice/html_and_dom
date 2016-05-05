function count() {
  if(isEmptyMessage()){
      countScore();
  }
}

function countScore(){
    var score=0;

    score += countFillBlankScore();
    score += countSingleChoiceScore();
    score += countMultipleChoiceScore();
    score += countJudgeScore();
    score += countTextQuestionScore();

    document.getElementById("userScore").value = score;

}

function countTextQuestionScore() {
    var textQuestionScore = 0;
    var text = document.getElementById('text').value;
    var regExp1 = /[简抽][化象]/g;
    var regExp2 = /[系过事概][统程务念]/g;
    var regExp3 = /[数实图][学体形](表达)*/g;
    var arr1 = text.match(regExp1);
    var arr2 = text.match(regExp2);
    var arr3 = text.match(regExp3);

    textQuestionScore += arr1.length*3 + arr2.length*2 + arr3.length*2;

    return textQuestionScore;
}

function countJudgeScore() {
    var judgeScore = 0;
    var userAnswer1 = document.getElementsByName('c1');
    var userAnswer2 = document.getElementsByName('c2');
    var answer1Index = 1;
    var answer2Index = 0;

    if(typeRadioJudge(userAnswer1, answer1Index)){
        judgeScore += 10;
    }
    if(typeRadioJudge(userAnswer2, answer2Index)){
        judgeScore += 10;
    }

    return judgeScore;
}

function countMultipleChoiceScore() {
    var multipleChoice = 0;
    var answer1 = {length:3, sum:4};
    var answer2 = {length:3, sum:3};
    var choices1 = document.getElementsByName("b1");
    var choices2 = document.getElementsByName("b2");
    var userAnswer1 = countUserAnswer(choices1);
    var userAnswer2 = countUserAnswer(choices2);

    if(typeCheckboxJudge(userAnswer1, answer1)) {
        multipleChoice += 10;
    }
    if(typeCheckboxJudge(userAnswer2, answer2)) {
        multipleChoice += 10;
    }

    return multipleChoice;
}

function typeCheckboxJudge(userAnswer, answer) {
    if( userAnswer.length=== answer.length && userAnswer.sum === answer.sum){
        return true;
    }
}

function countUserAnswer(choices) {
    var sum = 0;
    var len = 0;

    for(var i=0; i<choices.length; i++){
        if(choices[i].checked){
            sum += parseInt(choices[i].value);
            len ++;
        }
    }

    return {length:len, sum:sum};
}

function countSingleChoiceScore() {
    var singleChoiceScore = 0;
    var answer1Index = 1;
    var answer2Index = 0;
    var userAnswer1 = document.getElementsByName("a1");
    var userAnswer2 = document.getElementsByName("a2");

    if(typeRadioJudge(userAnswer1, answer1Index)){
        singleChoiceScore += 10;
    }
    if(typeRadioJudge(userAnswer2, answer2Index)){
        singleChoiceScore += 10;
    }
    
    return singleChoiceScore;
}

function typeRadioJudge(userAnswer, index) {

    return userAnswer[index].checked
}

function countFillBlankScore(){

    var userAnswer1 = document.getElementById("fillBlank1").value;
    var userAnswer2 = [document.getElementById("fillBlank2").value,
        document.getElementById("fillBlank3").value,
        document.getElementById("fillBlank4").value];
    var answer1 = ['统一建模语言'];
    var answer2 = ['封装性','继承性','多态性'];
    var fillBlankScore = 0;

    if(fillBlankJudge(userAnswer1, answer1)) {
        fillBlankScore += 5;
    }
    
    userAnswer2.forEach(function(item){
        if(fillBlankJudge(item, answer2)){
            fillBlankScore += 5;
        }
    });

    return fillBlankScore;
}

function fillBlankJudge(userAnswer, answer) {
    var temp;
    answer.forEach(function(item){
        if(item === userAnswer) {
            temp = true;
        }
    });
    return temp;
}


function isEmptyMessage(){
    var userClass = document.getElementById("userClass").value;
    var userName = document.getElementById("userName").value;
    var userId = document.getElementById("userId").value;
    if(userClass&&userId&&userName){
        return true;
    }else{
        alert("请检查学号班级姓名是否填写完整！");
    }
}


