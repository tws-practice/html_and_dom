$(document).ready(function () {
    $('#countButton').click(function () {
        if (isEmptyMessage()) {
            countScore();
        }
    });
});

function countScore() {
    var score = 0;

    score += countFillBlankScore();
    score += countSingleChoiceScore();
    score += countMultipleChoiceScore();
    score += countJudgeScore();
    score += countTextQuestionScore();

    $('#userScore').val(score);
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

    textQuestionScore += addScore(arr1) + addScore(arr2) + addScore(arr3);

    return textQuestionScore;
}

function addScore(arr) {
    if (arr == null) {
        return 0;
    } else {
        return arr.length * 3;
    }
}

function countJudgeScore() {
    var judgeScore = 0;
    var userAnswer1 = $("input[name='c1']:checked").val();
    var userAnswer2 = $("input[name='c2']:checked").val();
    var answer1 = 'error';
    var answer2 = 'right';

    judgeScore += addSelectScore(userAnswer1, answer1)
        + addSelectScore(userAnswer2, answer2);

    return judgeScore;
}

function countMultipleChoiceScore() {
    var multipleChoice = 0;

    var value1 = '013';
    var value2 = '012';
    var userValue1 = getMultipleValue($("input[name='b1']:checked"));
    var userValue2 = getMultipleValue($("input[name='b2']:checked"));

    multipleChoice += addSelectScore(userValue1, value1)
        + addSelectScore(userValue2, value2);

    return multipleChoice;
}

function getMultipleValue(choices) {
    var value = '';

    if (choices.length > 0) {
        choices.each(function (choice) {
            value += $(this).val();
        });
    }

    return value;
}

function countSingleChoiceScore() {
    var singleChoiceScore = 0;
    var answer1 = 'B';
    var answer2 = 'A';
    var userAnswer1 = $("input[name='a1']:checked").val();
    var userAnswer2 = $("input[name='a2']:checked").val();

    singleChoiceScore += addSelectScore(userAnswer1, answer1) +
        addSelectScore(userAnswer2, answer2);

    return singleChoiceScore;
}

function addSelectScore(userAnswer, answer) {
    var score = 0;

    if (userAnswer === answer) {
        score += 10;
    }

    return score;
}

function countFillBlankScore() {
    var userAnswer1 = [$('#fillBlank1').val()];
    var userAnswer2 = [$('#fillBlank2').val(),
        $('#fillBlank3').val(), $('#fillBlank4').val()];
    var answer1 = ['统一建模语言'];
    var answer2 = ['封装性', '继承性', '多态性'];
    var fillBlankScore = 0;

    fillBlankScore += addFillBlankScore(userAnswer1, answer1);
    userAnswer2.forEach(function (userAnswerItem) {
        fillBlankScore += addFillBlankScore(userAnswerItem, answer2);
    });

    return fillBlankScore;
}

function addFillBlankScore(userAnswer, answer) {
    var score = 0;

    answer.forEach(function (item) {
        if (item === userAnswer) {
            score += 5;
        }
    });
    return score;
}

function isEmptyMessage() {
    var userClass = $('#userClass').val();
    var userName = $('#userName').val();
    var userId = $('#userId').val();

    if (userClass && userId && userName) {
        return true;
    } else {
        alert("请检查学号班级姓名是否填写完整！");
    }
}


