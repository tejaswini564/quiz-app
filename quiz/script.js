const questions = [
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correct: "4"
  },
  {
    question: "What color is the sky?",
    answers: ["Green", "Red", "Blue", "Yellow"],
    correct: "Blue"
  },
  {
    question: "How many legs does a dog have?",
    answers: ["2", "4", "6", "8"],
    correct: "4"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next");
const scoreEl = document.getElementById("score");

function showQuestion() {
  let q = questions[currentQuestion];
  questionEl.innerText = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.classList.add("answer");
    btn.onclick = () => checkAnswer(answer);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].correct) {
    score++;
  }
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.innerText = "Quiz Finished!";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.innerText = "Your score: " + score + "/" + questions.length;
}

showQuestion();