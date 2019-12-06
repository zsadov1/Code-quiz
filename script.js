const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementsByid('results');
const submit = document.getElementsByid('submit');

function createQuiz(){
    // a place to store the HTML output
    const output = [];

    // for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // store the list of answer choices
            const answers =[];

            // for each available answer
            for(letter in currentQuestion.answers){

            // add an HTML radio buitton
            answers.push(
                `<label>
                <input type='radio name=question${questionNumber}' value='${letter}'></input>
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
            );
    }
            // include this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQustion.question} </div>
                <div class="answers"> ${answers.join('')}</div>`
            )
                
            
        }
    );
            // Combine output list into one string of HTML and put in ion the page
            quizContainer.innerHTML = output.join(''); 
};

    myQuestions.forEach( (currentQuestion, question Number) => {
        // The code we want to run for each question 
        // we'll want to store the list of answer choices
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

        // ...add an html radio button
            answers.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
            </label>`
  );

    quizContainer.innerHTML = output.join('');
}

// add this question and its answers to the output
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);
    })

function showResults(){
    
};

// display quiz right away
createQuiz();

// on submit, show results 
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];


