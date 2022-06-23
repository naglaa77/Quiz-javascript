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

let allBtn = [...document.querySelectorAll('.answer')];

let currentQuiz = 0;
let scoreNum = 0;
loadQuiz();

// to generate the questions and answers
function loadQuiz() {

const curentQuizData = questions[currentQuiz]; 
questionEl.innerText = curentQuizData.question; //question

allBtn.forEach((ele,index) => {
ele.innerHTML = curentQuizData.answers[index];

});

}


// what happend in click answer

allBtn.forEach((ele,index) => {
ele.addEventListener('click', () => {

  if (allBtn.indexOf(ele) ==  questions[currentQuiz].correctAnswerIndex) {
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


