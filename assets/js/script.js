
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
    },
    {
        question: "Where is Hadrian's Wall located?",
        options: ["England", "Italy", "Spain", "Turkey"],
        answer: "England"
    },
    {
        question: "Who was the first Roman Emperor to convert to Christianity?",
        options: ["Severus Alexander", "Constantine I", "Diocletian", "Vespasian"],
        answer: "Constantine I"
    },
    {
        question: "Under which emperor did Rome reach its zenith?",
        options: ["Hadrian", "Nerva", "Marcus Aurelius", "Trajan"],
        answer: "Trajan"
    }


];

let questionIndex = 0;
let totalQuestions = 6;
let score = 0;
let currentQuestion = 0;

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

/* Empties container div and populates quiz content */

function startQuiz() {

    /* Ensures a random question that will be asked once only */

    if (questionIndex === 0) {
        let randomQuestions = shuffleArray(questions);
        questions = randomQuestions;
    }

    currentQuestion = questions[questionIndex];

    let container = document.getElementById("container");

    /* Clears container */

    container.innerHTML = "";

    let quizArea = document.createElement("div");
    quizArea.id = "quiz-area";

    /* Creates a heading to display the question */

    let questionOption = document.createElement("h2");
    questionOption.textContent = questions[questionIndex].question;
    quizArea.appendChild(questionOption);

    /* Creates paragraph to display question count */

    let questionNumber = document.createElement("p");
    questionNumber.id = "num";
    questionNumber.textContent = `${questionIndex + 1} / ${totalQuestions}`;
    quizArea.appendChild(questionNumber);

    for (let option of questions[questionIndex].options) {
        let answer = document.createElement("button");
        answer.className = "quiz-btn";
        answer.textContent = option;
        answer.addEventListener("click", checkAnswer);
        quizArea.appendChild(answer);

    }

    /* Creates score paragraph */

    let myScore = document.createElement("p");
    myScore.id = "score";
    myScore.textContent = "Score: " + score;
    container.appendChild(myScore);

    container.appendChild(quizArea);

}

/* Compares selected option with correct answer and if correct, increments score */

function checkAnswer(event) {

    let selectOption = event.target;
    let selectAnswer = event.target.textContent;
    let correctAnswer = questions[questionIndex].answer;

    if (selectAnswer === correctAnswer) {
        selectOption.style.border = "5px solid green";
        alert("Correct!");
        score += 10;
        console.log("Correct");
    } else {
        selectOption.style.border = "5px solid red";
        alert(`Incorrect! The correct answer is: ${correctAnswer}`);
        console.log("Incorrect");
    }

    /* Calls next question */

    questionIndex++;

    if (questionIndex < totalQuestions) {
        setTimeout(startQuiz, 750);
    } else {
        endScore();
    }
}

/* Function for final score */

function endScore() {

    /* Clears container */

    container.innerHTML = "";

    let finalScore = score;
    let congrats = "";

    if (finalScore >= 60) {
        congrats = "Imperator, you have conquered all!";
    } else if (finalScore >= 30) {
        congrats = "Legate, you are victorious!";
    } else {
        congrats = "Tribune, attack again!";
    }


    let myResult = document.createElement("h2");
    myResult.id = "my-result";
    myResult.textContent = "End of Quiz! Your score is: " + score;
    container.appendChild(myResult);

    let resultText = document.createElement("p");
    resultText.id = "result-text";
    resultText.textContent = congrats;
    container.appendChild(resultText);

    let form = document.createElement("form");

    let usernameLabel = document.createElement("label");
    usernameLabel.textContent = "Username:";
    let usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.name = "username";

    let save = document.createElement("button");
    save.id = "save";
    save.textContent = "Save";

    let goHome = document.createElement("button");
    goHome.id = "go-home";
    goHome.textContent = "Go Home";

    form.appendChild(usernameLabel);
    form.appendChild(usernameInput);
    form.appendChild(save);
    form.appendChild(goHome);

    container.appendChild(form);
}



