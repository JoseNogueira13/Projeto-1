class Quizz {
    title = "";
    question = "";
    answer1 = "";
    answer2 = "";
    answer3 = "";
    answer4 = "";
    correctAnswer = "";
    quizzID = ""
    
    
    constructor(title, question, answer1, answer2, answer3, answer4, correctAnswer, quizzID) {
        this.title = title;
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.correctAnswer = correctAnswer;
        this.quizzID = quizzID;
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
        let currentIndex = quizzes.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [quizzes[currentIndex], quizzes[randomIndex]] = [
            quizzes[randomIndex], quizzes[currentIndex]];
    }

    

    let quizz = quizzes.find((quizz) => quizz.title === localStorage.getItem("recipe"))
    sessionStorage.setItem("currentQuizz", JSON.stringify(quizz))
    return quizz;
}

export function addQuizzes (title, question, answer1, answer2, answer3, answer4, correctAnswer, quizzID) {
    if (quizzes.some((quizz) => quizz.quizzID === quizzID)) {
        throw Error(`A quizz with that ID already exists try using another one!`);
    }else {
        quizzes.push(new Quizz(title, question, answer1, answer2, answer3, answer4, correctAnswer, quizzID))
        localStorage.setItem("quizzes", JSON.stringify(quizzes))
    }
}

export function removeQuizzes (quizzID) {
    quizzes = quizzes.filter((quizz) => quizz.quizzID !== quizzID);
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
}
