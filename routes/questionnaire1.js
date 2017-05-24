var answer_file = require("../q1_response.json");
var fs = require('fs');

exports.view = function (req, res) {
    res.render('questionnaire');
};

exports.addAnswer = function (req, res) {
	var usefulness = req.query.usefulness;
	var efficiency = req.query.efficiency;
	var improvement = req.query.improvement;
	var questionnaire_1 = {
		"usefulness": usefulness,
		"efficiency": efficiency,
		"improvement": improvement
	};
	console.log(questionnaire_1);
	answer_file.questionnaires.push(questionnaire_1);
	var json = JSON.stringify(answer_file);
	fs.writeFile("q1_response.json", json, 'utf8', function errorCallback(err) {
		if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            console.log("done");
            res.render('question2');
        }
    });
}