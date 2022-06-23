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


let score = 0;
let questionsItemIndex = 0;
const container = document.querySelector("question-container");
const questiocontainer = document.querySelector('#question');
const answer = document.querySelector('#answers');
const scoreElement = document.querySelector('#score');
console.log(scoreElement);
// keep our score variable syn with the ui
function updateScore(newScore) {
  score = newScore;
  scoreElement.innerHTML = score;
}
// keep our index syn with ui
function updateQuestionNumber () {
  const questionNum = questionsItemIndex + 1;
const totalNumQuestions = questions.length;
}

//clone our template and fill it with questions 's items
function displayQuestionItems () {
const questionItem = questions[questionsItemIndex];
const {question, answers, correctAnswerIndex} = questionItem;
console.log(question, answers, correctAnswerIndex);
}

//check if the answer picked was correct or incorrect
function onAnswerClicked () {

}
// clear question items from page
function clearQuestions () {

}
displayQuestionItems ();
});


/**
feature
- creer/suprimer une question
-savoir lorsqu'une question est repondu
- savoir si la reponse est correct

question:
-text
-list answer []
- create() => creer fonction pour creer le question
- disable() => creer fonction pour disactive le question  
-remove() => creer fonction pour suprimer tout ca 


 */