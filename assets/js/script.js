let questionIndex = 0;
let totalQuestions = 6;
let score = 0;
let currentQuestion = 0;
let username = "";

if (localStorage.getItem("username",)) {

    username = localStorage.getItem("username");
    document.getElementById("username").value = username;

}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Saves username and disables input field after //
function saveUsername() {

    let inputUsername = document.getElementById("username");
    let inputValue = inputUsername.value.trim();

    if (inputValue !== "") {

        username = inputValue;
        localStorage.setItem("username", username); // Stores username
        alert("Your username has been saved!"); // Confirms to the user their username has been saved // 

    }
}

// Empties container div and populates quiz content //
function startQuiz() {

    // Displays alert to tell user to submit their username //
    if (username === "") {

        alert("Please select your username before starting the quiz.");
        return;

    }
    // Ensures a random question that will be asked once only //
    if (questionIndex === 0) {

        let randomQuestions = shuffleArray(questions);
        questions = randomQuestions;

    }

    currentQuestion = questions[questionIndex];

    let container = document.getElementById("container");
    container.innerHTML = ""; // Clears container //

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
    let feedbackResult = "";

    if (selectAnswer === correctAnswer) {

        selectOption.style.border = "5px solid green";
        score += 10; // Increments score by 10
        feedbackResult = "Correct!";

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
    container.innerHTML = "";

    const congratsResult = {

        HIGH: "60", // Stores 60 as the value of HIGH //
        MID: "30" // Stores 30 as the value of MID //

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
    myResult.textContent = `${username} , your score is: ${score}`;
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

// Add page of instruction // 
function toggleRules() {

    let container = document.getElementById("container");
    container.innerHTML = "";

    let rulesHeading = document.createElement("h3");
    rulesHeading.textContent = "About the Quiz";
    container.appendChild(rulesHeading);

    let rulesList = document.createElement("ol");

    // List of instructions // 
    let instructions = [

        "Enter your username and click Start Quiz to begin the quiz.",
        "You will be asked six questions. Read the question carefully.",
        "For each question, there will be four options to choose from.",
        "Each correct question is worth ten points. If you answer incorrectly, you get 0. The correct answer will briefly be displayed below the options.",
        "Depending on your result, you will get a different score and message at the end of the quiz.",
        "If you want to try again, select 'Play Again'. Otherwise you can return to the main page by clicking 'Exit'."

    ];

    for (let instruction of instructions) {
        let list = document.createElement("li");
        list.textContent = instruction;
        rulesList.appendChild(list);
    }

    container.appendChild(rulesList);

    let backButton = document.createElement("button");
    backButton.textContent = "Back";
    backButton.className = "back";
    backButton.addEventListener("click", () => {

        window.location.href = "index.html"; // Reverts to main html //

    });
    container.appendChild(backButton);


}




