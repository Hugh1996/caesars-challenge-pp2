let questionIndex = 0;
let totalQuestions = 6;
let score = 0;
let currentQuestion = 0;

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Empties container div and populates quiz content //
function startQuiz() {

    // Ensures a random question that will be asked once only //
    if (questionIndex === 0) {

        let randomQuestions = shuffleArray(questions);
        questions = randomQuestions;

    }

    currentQuestion = questions[questionIndex];

    let container = document.getElementById("container");

    // Clears container //
    container.innerHTML = "";

    let quizArea = document.createElement("div");
    quizArea.className = "quiz-area";

    // Creates a heading to display the question //
    let questionOption = document.createElement("h2");
    questionOption.textContent = questions[questionIndex].question;
    quizArea.appendChild(questionOption);

    // Creates paragraph to display question count //
    let questionNumber = document.createElement("p");
    questionNumber.className = "num";
    questionNumber.textContent = `${questionIndex + 1} / ${totalQuestions}`;
    quizArea.appendChild(questionNumber);

    for (let option of questions[questionIndex].options) {

        let answer = document.createElement("button");
        answer.className = "quiz-btn";
        answer.textContent = option;
        answer.addEventListener("click", checkAnswer);
        quizArea.appendChild(answer);

    }

    // Create feedback paragraph //
    let displayFeedback = document.createElement("p");
    displayFeedback.id = "feedback";
    quizArea.appendChild(displayFeedback);

    // Creates score paragraph //
    let myScore = document.createElement("p");
    myScore.className = "score";
    myScore.textContent = "Score: " + score;
    container.appendChild(myScore);
    container.appendChild(quizArea);

}

// Compares selected option with correct answer and if correct, increments score //
function checkAnswer(event) {

    let selectOption = event.target;
    let selectAnswer = event.target.textContent;
    let correctAnswer = questions[questionIndex].answer;
    let feedbackResult;

    if (selectAnswer === correctAnswer) {

        selectOption.style.border = "5px solid green";
        score += 10; // Increments score by 10

    } else {

        selectOption.style.border = "5px solid red";
        feedbackResult = `The correct answer is: ${correctAnswer}`; // Displays correct answer

    }

    const feedback = document.getElementById("feedback");
    feedback.textContent = feedbackResult;

    // Calls next question //
    questionIndex++;

    if (questionIndex < totalQuestions) {

        setTimeout(startQuiz, 1000); // Correct answer disappears after one second

    } else {

        endScore();

    }
}

// Function for final score //
function endScore() {

    let container = document.getElementById("container");

    // Clears container //
    container.innerHTML = "";

    const congratsResult = {

        HIGH: "60",
        MID: "30"

    };

    let finalScore = score;
    let congrats = "";

    if (finalScore >= congratsResult.HIGH) {

        congrats = "Imperator, you have conquered all!"; // Displays when user gets HIGH result

    } else if (finalScore >= congratsResult.MID) {

        congrats = "Legate, you are victorious!"; // Displays when user gets MID result

    } else {

        congrats = "Tribune, try again!"; // Displays when user gets low result

    }


    let myResult = document.createElement("h2");
    myResult.className = "my-result";
    myResult.textContent = "Your score is: " + score;
    container.appendChild(myResult);

    let resultText = document.createElement("p");
    resultText.className = "result-text";
    resultText.textContent = congrats;
    container.appendChild(resultText);

    let playAgain = document.createElement("button");
    playAgain.className = "play-again";
    playAgain.textContent = "Play Again";
    playAgain.addEventListener("click", () => {

        questionIndex = 0;
        score = 0;
        startQuiz(); // Calls startQuiz when the user selects Play Again

    });

    container.appendChild(playAgain);

    let goHome = document.createElement("button");
    goHome.className = "go-home";
    goHome.textContent = "Exit";
    goHome.addEventListener("click", () => {

        window.location.href = "index.html"; // Returns user to main page when Exit button is selected

    });
    container.appendChild(goHome);

}


function highScore() {

    container.innerHTML = "";

}







