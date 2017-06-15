module.exports = function(app) {

	var jsonArr = require('../questions.json');

	var Question = app.models.Questions;

	Question.destroyAll();
	
	Question.upsert(jsonArr, (err, data)=>{
		if (err) {
			console.log(err);
		} else {
			console.log("Success")
		}
	});
	
/*	jsonArr.forEach(function(questionDict){
		Question.create(questionDict, function(err, record) {
			if (err) return console.log(err);
		});
	});
*/
	console.log("Questions inserted successfully");
};
