class Quizz {
    image = "";
    title = "";
    question = "";
    answer1 = "";
    answer2 = "";
    answer3 = "";
    answer4 = "";
    correctAnswer = "";
    isDone = false;
    
    
    constructor(image, title, question, answer1, answer2, answer3, answer4, correctAnswer, isDone) {
        this.image = image;
        this.title = title;
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.correctAnswer = correctAnswer;
        this.isDone = isDone;
    }
}

let quizzes;

//CARREGAR QUIZZES DA LOCAL STORAGE

export function init() {
    quizzes = localStorage.quizzes ? JSON.parse(localStorage.quizzes) : [];
}

export function getQuizzes() {
    return quizzes
}

export function getCurrentQuizz () {
    let quizz = quizzes.find((quizz) => quizz.title === localStorage.getItem("recipe"))
    sessionStorage.setItem("currentQuizz", JSON.stringify(quizz))
    return quizz;
}

