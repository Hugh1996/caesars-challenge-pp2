function startQuiz(questions) {

    let container = document.getElementById("container");

    container.innerHTML = "";

    for (let question of questions) {
        let quizArea = document.createElement("div");
        quizArea.id = "quiz-area";

        let questionOption = document.createElement("h2");
        questionOption.textContent = question.question;
        quizArea.appendChild(questionOption);

        for (let option of question.options) {
            let answer = document.createElement("button");
            answer.className = "quiz-btn";
            answer.textContent = option;
            quizArea.appendChild(answer);

        }

        container.appendChild(quizArea);

    }

}

let questions = [
    {
        question: "Who was the first Roman Emperor?",
        options: ["Augustus", "Julius Caesar", "Marcus Aurelius", "Constantine"]
    },
    {
        question: "Which was the privileged social class in Ancient Roman Society?",
        options: ["Publican", "Patrician", "Plebeian", "Eques"]
    },
    {
        question: "What was the eastern part of the Roman Empire called?",
        options: ["Eastern Empire", "Sasanian Empire", "Byzantine Empire", "Akkadian Empire"]
    },
    {
        question: "The ancient city of Rome was built on this many hills?",
        options: ["14", "10", "3", "7"]
    },
    {
        question: "In what year did the Western Roman Empire collapse?",
        options: ["1453 AD", "753 BC", "476 AD", "27 BC"]
    },
    {
        question: "Who was the legendary founder of Rome?",
        options: ["Hannibal", "Spartacus", "Augustus", "Romulus"]
    }
];

startQuiz(questions);