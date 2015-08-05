function checkout() {
  var information = new Information(document.getElementById('class-name').value,
                                    document.getElementById('id-number').value,
                                    document.getElementById('student-name').value);
  if(!information.check()){
    return false;
  }

  var score = new Score();

  var fibInputs = [['one-one'],['one-two','one-three','one-four']];
  var fibAnwser = [['统一建模语言'],['1','2','3']];
  var fillInBlanks = new FillInBlanks(fibInputs,fibAnwser);
  fillInBlanks.getInputsValues();
  fillInBlanks.checkAnwser(score);

  var singleChooseInputs = ['two-one','two-two'];
  var singleChooseAnwser = ['A','A'];
  var singleChoose = new SingleChoose(singleChooseInputs,singleChooseAnwser);
  singleChoose.getInputsValues();
  singleChoose.checkAnwser(score);

  var multiChooseInputs = ['three-one','three-two'];
  var multiChooseAnwser = ['ABD','ABC'];
  var multiChoose = new MultiChoose(multiChooseInputs,multiChooseAnwser);
  multiChoose.getInputsValues();
  multiChoose.checkAnwser(score);

  var judgeInputs = ['four-one','four-two'];
  var judgeAnwser = ['false','true'];
  var judge = new Judge(judgeInputs,judgeAnwser);
  judge.getInputsValues();
  judge.checkAnwser(score);

  var subjectiveInputs = ['five-one'];
  var SubjectiveAnwser = ['我不会'];
  var subjective = new Subjective(subjectiveInputs,SubjectiveAnwser);
  subjective.getInputsValues();
  subjective.checkAnwser(score);

  score.showScore();
}
