function populate(){
     if(quiz.isEnded()) {
        //  showScores();
     }
     else {
        //  show question 
        var element = document.getElementById('questions');
        element.innerHTML = quiz.getQuestionIndex().text;
     }
}


var questions =[
    new  Questions ("HTML stands for?", ["Hyper text markup language", "Hot Tamales melt laughs", "Hi Tom mom laughs", "Huh? too? me? lizard?"], "Hyper text markup language"),
    new  Questions ("Which language is use for web apps?", ["Python", "Javascript", "PHP", "All"], "All"),
    new  Questions ("Which language is used for styling web pages?", ["CSS", "XML", "JQuery", "HTML"], "CSS"), 
    new  Questions ("How do you spell my name?", ["Zach", "Zac", "Zack", "Xach"], "Zach"), 
];

var quiz = new Quiz(questions);

populate();
