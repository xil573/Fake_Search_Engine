function gotoQuestionnaire(){
	window.location.href = "questionnaire";
}

function gotoQuestion2(){
	window.location.href = "question2";
}
//timing functions
var c = 0;
var t;
function timeCount(){
	document.getElementById('mytime').value = c;
	c = c + 1;
	t = setTimeout("timeCount()", 1000);
}

function stopCount(){
	var duration = document.getElementById("mytime").value;
	console.log("Question 1 duration:", duration);
}