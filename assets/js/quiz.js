
const maxQuestions = 5;

function startQuiz(questions) {

    let container = document.getElementById("container");

    container.innerHTML = "";

    let quizArea = document.createElement("div");
    quizArea.id = "quiz-area";

    let question = document.createElement("h2");
    question.textContent = "This will be the first question";
    quizArea.appendChild(question);


    let options = ["1", "2", "3", "4"];
    for (let option of options) {
        let answer = document.createElement("button");
        answer.className = "quiz-btn";
        answer.textContent = option;
        quizArea.appendChild(answer);

    };

    container.appendChild(quizArea);

}

