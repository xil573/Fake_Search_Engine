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
	var confident = req.query.confident;
	var questionnaire_2 = {
		"usefulness": usefulness,
		"efficiency": efficiency,
		"improvement": improvement,
		"confident": confident
	};
	console.log(questionnaire_2);

	var mongoose = require('mongoose');
	var questionnaireSchema = mongoose.Schema({
		usefulness: String,
		efficiency: String,
		confident: String,
		improvement: String
	});
	var questionnaire2_response = mongoose.model('questionnaire2 response', questionnaireSchema);
	var q1_response = new questionnaire2_response({
	    usefulness: usefulness,
		efficiency: efficiency,
		confident: confident,
		improvement: improvement
	});
	      //console.log(q1_response.id); // 'Silence'
	q1_response.save(function(err, q1_response){
	    if (err) return console.error(err);
	    else console.log("saved to db for questionnaire2!");
	});


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
