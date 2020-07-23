$(document).ready(function(){
$("#answer").hide();


var magic8ball = {}; 

magic8ball.listofAnswers = ["not likely", "ask again later", "certainly", "never gonna happen", "the future is quite clear", "yes", "the answer is obvious", "absolutely not", "as you wish"];

magic8ball.answerquestion = function (question) {
	 var randomNumber = Math.random(); //generate random number 0-1
	 var randomNumberArray = randomNumber * magic8ball.listofAnswers.length; //multiplies random by length of list
	 var randomIndex = Math.floor(randomNumberArray); //rounds random number down
	 var randomAnswer = magic8ball.listofAnswers[randomIndex];
	 
	 $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
     $("#answer").text( randomAnswer );
	 $("#answer").fadeIn(4000);
}; //assigns item from listofAnswers


//This will become a button
var onclick = function() {
		$("#answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
		setTimeout(
    function() {
		var question = prompt("ASK A YES/NO QUESTION!");
		$("#8ball").effect( "shake" );
        magic8ball.answerquestion(question);
	}, 500);
};

$("#questionButton").click(onclick);


});