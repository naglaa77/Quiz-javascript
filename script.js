/**
 * script.js - Script de la page
 */

/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: ["1967", "1974", "1962", "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: ["Zelda", "Ganon", "Tom", "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: ["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"],
    correctAnswerIndex: 2,
  },
];
/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

/*************************/
/* Contenu du DOM chargé */
/*************************/
document.addEventListener("DOMContentLoaded", () => {
  // A FAIRE: Compléte le code pour de faire fonctionner le quizz, pour plus d'informations consulte le sujet
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
 
// function for create button answers
function createBtnAnswer () {
for(let i = 0; i <4; i++) {
    let btnAnswer = document.createElement('button');
    btnAnswer.classList ="answer";
    answersEl.appendChild(btnAnswer)
    }
}

createBtnAnswer ();

// select all button in array by spread operator
let allBtn = [...document.querySelectorAll('.answer')];

let currentQuiz = 0;     // i refere to the first question to appeare and after that i will increase it by one
let scoreNum = 0;        // i refere to number of score when user select a correct answer
loadQuiz();

// to generate the questions and answers in their position
function loadQuiz() {

const curentQuizData = questions[currentQuiz];                        // selecte the first ele in array questions
questionEl.innerText = curentQuizData.question;                       //selecte the question index 

allBtn.forEach((ele,index) => {
ele.innerHTML = curentQuizData.answers[index];

});

}


// what happend when user click  the any answer

allBtn.forEach((ele,index) => {
ele.addEventListener('click', () => {

  if (allBtn.indexOf(ele) ==  questions[currentQuiz].correctAnswerIndex) {   // what happend when user click  the correct answer
let score = document.getElementById('score');
   score.innerHTML =  scoreNum +1 ;
    scoreNum++;
}
  currentQuiz++;
if (currentQuiz < questions.length) {
    
    loadQuiz();
} else{
questionEl.innerHTML = "Merci d'avoir repondu.:)";
allBtn.forEach((ele,index) => {
ele.style.display = "none";

        });

      }
 

    })

  });


});


