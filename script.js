function generateQuiz(questions, quizContainer, ResultsContainer, submitButton){

    function showQuestion(questions,quizContainer){

        // code
    }

    function showResults(questions, quizContainer, resultsContainer){

        // code

    }

    showQuestion(questions,quizContainer);

    submitButton.onclick = function(){
        showResults(questions, quizContainer,resultsContainer);
    }
}

var myQuestion = [
    {
        question: "What is 5 + 5?",
        answers: {
            a: '10',
            b: '5',
            c: 'Mashed Potato',
            d: 'Egg',
        },
        correctAnswer: '10'
    },
    {
        question: "What is 5 + 5?",
        answers: {
            a: '10',
            b: '5',
            c: 'Mashed Potato',
            d: 'Egg',
        },
        correctAnswer: '10'
    },
    {
        question: "What is 5 + 5?",
        answers: {
            a: '10',
            b: '5',
            c: 'Mashed Potato',
            d: 'Egg',
        },
        correctAnswer: '10'
    },
    {
        question: "What is 5 + 5?",
        answers: {
            a: '10',
            b: '5',
            c: 'Mashed Potato',
            d: 'Egg',
        },
        correctAnswer: '10'
    },
];

function showQuestions(questions, quizContainer){
    var output = [];
    var answers;

    for(var i = 0; i < question.length; i++ ){
        answers = [];

        for(letter in question[i].answers){

            answers.push(
                '<label>'
                    + '<input type "radio" name="question'+i+'"value= "'+letter+'>'
                    + letter + ': '
                    + question[i].answers[letter] 
                + '</label>'        
           );
        }

        output.push(
            '<div class="questions">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }
    quizContainer.innerHTML = output.join('');
}
    

    showQuestions(questions, quizContainer);