function gotoQuestionnaire(){
	window.location.href = "questionnaire";
}

function gotoQuestion3(){
	window.location.href = "question3";
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
	console.log("Question 2 duration:", duration);
}
