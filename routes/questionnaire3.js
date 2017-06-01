var answer_file = require("../q3_response.json");
var fs = require('fs');

exports.view = function (req, res) {
    res.render('questionnaire3');
};

exports.addAnswer = function (req, res) {
	var usefulness = req.query.usefulness;
	var efficiency = req.query.efficiency;
	var improvement = req.query.improvement;
	var confident = req.query.confident;
	var questionnaire_3 = {
		"usefulness": usefulness,
		"efficiency": efficiency,
		"improvement": improvement,
		"confident": confident
	};
	console.log(questionnaire_3);

	var mongoose = require('mongoose');
	var questionnaireSchema = mongoose.Schema({
		usefulness: Number,
		efficiency: Number,
		confident: Number,
		improvement: String
	});
	var questionnaire3_response = mongoose.model('questionnaire3 response', questionnaireSchema);
	var q1_response = new questionnaire3_response({
	    usefulness: usefulness,
		efficiency: efficiency,
		confident: confident,
		improvement: improvement
	});
	      //console.log(q1_response.id); // 'Silence'
	q1_response.save(function(err, q1_response){
	    if (err) return console.error(err);
	    else console.log("saved to db for questionnaire3!");
	});


	answer_file.questionnaires.push(questionnaire_3);
	var json = JSON.stringify(answer_file);
	fs.writeFile("q3_response.json", json, 'utf8', function errorCallback(err) {
		if (err) {            
            console.log("wrong");
        } else {
            //res.json(1);
            console.log("done");
            res.render('exit');
        }
    });
}