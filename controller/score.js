var FillInBlanks = require('./fill-in-blanks.js');
var SingleChoose = require('./single-choose.js');
var MultiChoose = require('./multi-choose.js');
var Judge = require('./judge.js');
var Subjective = require('./subjective.js');
var jsonFile = require('../data.json');

function Score(data){
    this.data = data;
    this.score = 0;
}

Score.prototype.calculate = function(){
    var fillInBlanks =  new FillInBlanks(this.data,jsonFile);
    fillInBlanks.checkAnswer(this);
    //var singleChoose = new SingleChoose(this.data,jsonFile);
    //var multiChoose = new MultiChoose(this.data,jsonFile);
    //var judge = new Judge(this.data,jsonFile);
    //var subjective = new Subjective(this.data,jsonFile);
};

Score.prototype.add =function(number){
    this.score += number;
};





















module.exports = Score;