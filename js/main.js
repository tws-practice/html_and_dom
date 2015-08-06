function checkout() {
  var information = new Information($('#class-name').val(),
                                    $('#id-number').val(),
                                    $('#student-name').val());
  if(!information.check()){
    return false;
  }

  var score = new Score();

  var fibInputs = [['one-one'],['one-two','one-three','one-four']];
  var fibAnswer = [['统一建模语言'],['1','2','3']];
  var fillInBlanks = new FillInBlanks(fibInputs,fibAnswer);
  fillInBlanks.getInputsValues();
  fillInBlanks.checkAnswer(score);

  var singleChooseInputs = ['two-one','two-two'];
  var singleChooseAnswer = ['A','A'];
  var singleChoose = new SingleChoose(singleChooseInputs,singleChooseAnswer);
  singleChoose.getInputsValues();
  singleChoose.checkAnswer(score);

  var multiChooseInputs = ['three-one','three-two'];
  var multiChooseAnswer = ['ABD','ABC'];
  var multiChoose = new MultiChoose(multiChooseInputs,multiChooseAnswer);
  multiChoose.getInputsValues();
  multiChoose.checkAnswer(score);

  var judgeInputs = ['four-one','four-two'];
  var judgeAnswer = ['false','true'];
  var judge = new Judge(judgeInputs,judgeAnswer);
  judge.getInputsValues();
  judge.checkAnswer(score);

  var subjectiveInputs = ['five-one'];
  var SubjectiveAnswer = ['我不会'];
  var subjective = new Subjective(subjectiveInputs,SubjectiveAnswer);
  subjective.getInputsValues();
  subjective.checkAnswer(score);

  score.showScore();
}
