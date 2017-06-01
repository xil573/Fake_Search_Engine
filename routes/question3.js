var items = require('../question3.json');
var answer_file = require("../q3_response.json");
var fs = require('fs');

exports.view = function (req, res) {
    res.render('question3', items);
};

exports.addAnswer = function (req, res){
	var answer = req.query.answer;
    var time = req.query.mytime;
	//console.log(answer);
    var mongoose = require('mongoose');
    var questionSchema = mongoose.Schema({
        answer: String,
        time: Number
      });
    var question3_response = mongoose.model('question3 response', questionSchema);
    var q1_response = new question3_response({
        answer: answer, 
        time: time 
    });
    //console.log(q1_response.answer); // 'Silence'
    q1_response.save(function(err, q1_response){
        if (err) return console.error(err);
        else console.log("saved to db for q3!");
    });

	answer_file.answers.push(answer);
    answer_file.time.push(time);
	var json = JSON.stringify(answer_file);
	fs.writeFile("q3_response.json", json, 'utf8', function errorCallback(err) {
		if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            console.log("done");
            res.render('questionnaire3');
        }
    });
}