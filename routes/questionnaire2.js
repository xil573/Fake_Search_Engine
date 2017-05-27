var answer_file = require("../q2_response.json");
var items = require('../question3.json');
var fs = require('fs');

exports.view = function (req, res) {
    res.render('questionnaire2');
};

exports.addAnswer = function (req, res) {
	var usefulness = req.query.usefulness;
	var efficiency = req.query.efficiency;
	var improvement = req.query.improvement;
	var questionnaire_2 = {
		"usefulness": usefulness,
		"efficiency": efficiency,
		"improvement": improvement
	};
	console.log(questionnaire_2);
	answer_file.questionnaires.push(questionnaire_2);
	var json = JSON.stringify(answer_file);
	fs.writeFile("q2_response.json", json, 'utf8', function errorCallback(err) {
		if (err) {
            console.log("wrong");
        } else {
            //res.json(1);
            console.log("done");
            res.render('question3', items);
        }
    });
}
