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

    /* Create feedback paragraph */
    let displayFeedback = document.createElement("p");
    displayFeedback.id = "feedback";
    quizArea.appendChild(displayFeedback);

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
    let feedbackResult;

    if (selectAnswer === correctAnswer) {

        selectOption.style.border = "5px solid green";
        score += 10;

    } else {

        selectOption.style.border = "5px solid red";
        feedbackResult = `The correct answer is: ${correctAnswer}`;

    }

    const feedback = document.getElementById("feedback");
    feedback.textContent = feedbackResult;

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
    myResult.textContent = "Your score is: " + score;
    container.appendChild(myResult);

    let resultText = document.createElement("p");
    resultText.id = "result-text";
    resultText.textContent = congrats;
    container.appendChild(resultText);

    let form = document.createElement("form");

    let usernameInput = document.createElement("input");
    usernameInput.placeholder = "Username";
    usernameInput.type = "text";
    usernameInput.name = "username";

    let save = document.createElement("button");
    save.id = "save";
    save.textContent = "Save";

    let goHome = document.createElement("button");
    goHome.id = "go-home";
    goHome.textContent = "Go Home";

    form.appendChild(usernameInput);
    form.appendChild(save);
    form.appendChild(goHome);

    container.appendChild(form);


}

function highScore() {

    container.innerHTML = "";

}






