const totalQuestions = 5;
let questionIndex = 0;
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

/**
 * Saves username and disables input field after
 */

document.getElementById("username").addEventListener("input", function () {
    let inputUsername = document.getElementById("username");
    let inputValue = inputUsername.value.trim();

    if (inputValue !== "") {

        username = inputValue;
        localStorage.setItem("username", username); // Stores username

    }
});

/**
 * Empties container div and populates quiz content
 */
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

/**  
 * Compares selected option with correct answer and if correct, increments score 
*/
function checkAnswer(event) {

    let selectOption = event.target;
    let selectAnswer = event.target.textContent;
    let correctAnswer = questions[questionIndex].answer;
    let feedbackResult = "";

    if (selectAnswer === correctAnswer) {

        selectOption.style.border = "5px solid green";
        score += 20; // Increments score by 20
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

        setTimeout(endScore, 1000); // Adds pause before moving to final score page //

    }
}

/** 
 * Function for final score
 **/
function endScore() {

    let container = document.getElementById("container");
    container.innerHTML = "";

    const congratsResult = {

        HIGH: "100", // Stores 100 as the value of HIGH //
        MID: "60", // Stores 60 as the value of MID //
        LOW: "40" // Stores 40 as the value of LOW //

    };

    let finalScore = score;
    let congrats = "";

    if (finalScore >= congratsResult.HIGH) {

        congrats = "Imperator, you have conquered all!"; // Displays when user gets HIGH result //

    } else if (finalScore >= congratsResult.MID) {

        congrats = "Legate, you are victorious!"; // Displays when user gets MID result //

    } else if (finalScore >= congratsResult.LOW) {

        congrats = "Well done Tribune!"; // Displays when user gets low result //

    } else {

        congrats = "Try again soldier!"; // Displays when user gets lowest result //

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

/**
 * Add page of instructions
 */
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
        "You will be asked five questions. Read each question carefully.",
        "For each question, there will be four answers to choose from.",
        "Each correct question is worth twenty points. If you answer incorrectly, you get zero. The correct answer will briefly be displayed below the options.",
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

let audioEnabled = true;
const audioBtn = document.getElementsByClassName("audio-btn")[0];
const audioPlayer = document.getElementsByClassName("audio-player")[0];
const audioOff = '<i class="fa-solid fa-volume-xmark"></i>';
const audioOn = '<i class="fa-solid fa-volume-high"></i>';

/**
 * Allows the user the options to play or mute audio
 */
function toggleAudio() {

    if (audioEnabled) {

        audioEnabled = false;
        audioBtn.innerHTML = audioOff;
        audioPlayer.pause();

    } else {

        audioEnabled = true;
        audioBtn.innerHTML = audioOn;
        audioPlayer.play();

    }


}

