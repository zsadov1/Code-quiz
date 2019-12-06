function populate(){
     if(quiz.isEnded()) {
         showScores();
     }
     else {
        //  show question 
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
     }
};

function guess (id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
        var element = document.getElementById("quiz");
        element.innerHTML = gameOverHtml;

}


var questions = [
    new  Question ("HTML stands for?", ["Hyper text markup language", "Hot Tamales melt laughs", "Hi Tom mom laughs", "Huh? too? me? lizard?"], "Hyper text markup language"),
    new  Question ("Which language is use for web apps?", ["Python", "Javascript", "PHP", "All"], "All"),
    new  Question ("Which language is used for styling web pages?", ["CSS", "XML", "JQuery", "HTML"], "CSS"), 
    new  Question ("How do you spell my name?", ["Zach", "Zac", "Zack", "Xach"], "Zach"), 
];

var quiz = new Quiz(questions);

populate();
