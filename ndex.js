var readline = require("readline-sync");

var userName = readline.question("What is your name? ");
console.log("Welcome " + userName + " DO YOU KNOW Doreamon");

var score = 0;

function play(question, answer) {
  var userAnswer = readline.question(question);

  if (userAnswer === answer) {
    console.log("You were right");
    score = score + 1;
  } else {
    console.log("You were wrong");
  }

  console.log("Current score: " + score);
  console.log("-------------------------------------");
}

var questions = [
  {
    question: "color of doreamon? ",
    answer: "blue",
  },

  {
    question: "Girl's name that nobita likes? ",
    answer: "Shizuka",
  },

  {
    question: "Doremon favorite dish ",
    answer: "dorayaki",
  },

  {
    question: "Does Nobita have sibling ",
    answer: "no",
  },

  {
    question: "Nobita is afraid of ",
    answer: "Jian",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentOuestion = questions[i];
  play(currentOuestion.question, currentOuestion.answer);
}

console.log("Your total score is " + score);
