/* List of questions */

let questions = [
    {
        question: "Who was the first Roman Emperor?",
        options: ["Augustus", "Julius Caesar", "Marcus Aurelius", "Constantine"],
        answer: "Augustus"
    },
    {
        question: "Which was the privileged social class in Ancient Roman Society?",
        options: ["Publican", "Patrician", "Plebeian", "Eques"],
        answer: "Patrician"
    },
    {
        question: "What was the eastern part of the Roman Empire called?",
        options: ["Eastern Empire", "Sasanian Empire", "Byzantine Empire", "Akkadian Empire"],
        answer: "Byzantine Empire"
    },
    {
        question: "The ancient city of Rome was built on this many hills?",
        options: ["14", "10", "3", "7"],
        answer: "7"
    },
    {
        question: "In what year did the Western Roman Empire collapse?",
        options: ["1453 AD", "753 BC", "476 AD", "27 BC"],
        answer: "476 AD"
    },
    {
        question: "Who was the legendary founder of Rome?",
        options: ["Hannibal", "Spartacus", "Augustus", "Romulus"],
        answer: "Romulus"
    },
    {
        question: "Which Roman Emperor named his horse senator?",
        options: ["Caligula", "Nero", "Caracalla", "Domitian"],
        answer: "Caligula"
    }
];

/* Produces 5 random questions out of a total of 7 */

let questionIndex = Math.floor(Math.random() * questions.length);

/* Empties container div and populates quiz questions */

function startQuiz() {

    let container = document.getElementById("container");

    container.innerHTML = "";

    let quizArea = document.createElement("div");
    quizArea.id = "quiz-area";

    let questionOption = document.createElement("h2");
    questionOption.textContent = questions[questionIndex].question;
    quizArea.appendChild(questionOption);

    for (let option of questions[questionIndex].options) {
        let answer = document.createElement("button");
        answer.className = "quiz-btn";
        answer.textContent = option;
        answer.addEventListener("click", checkAnswer);
        quizArea.appendChild(answer);

    }

    container.appendChild(quizArea);

}

/* Compares selected option with correct answer */

function checkAnswer(event) {

    let selectOption = event.target.textContent;
    let correctAnswer = questions[questionIndex].answer;

    if (selectOption === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }

    questionIndex++;

    /* Calls next question */

    if (questionIndex < questions.length) {
        startQuiz();
    }
}



