var items = require('../question1.json');
var answer_file = require("../q1_response.json");
var fs = require('fs');

exports.view = function (req, res) {
    res.render('question1', items);
};

exports.addAnswer = function (req, res){
	var answer = req.query.answer;
    var time = req.query.mytime;
	//console.log(answer);
	answer_file.answers.push(answer);
    answer_file.time.push(time);
	var json = JSON.stringify(answer_file);
	fs.writeFile("q1_response.json", json, 'utf8', function errorCallback(err) {
		if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            console.log("done");
            res.render('questionnaire1');
        }
    });
}