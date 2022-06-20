import * as Quizz from "../Models/QuizzModel.js";

function manageRecipesViewSelect() {
    let resultSelect = `<label for="recipeTitleSelect">Choose recipe to make a quizz for:</label>
  <select id="recipe" name="recipe">`
  console.log(JSON.parse(localStorage.recipes));
    for (const recipe of JSON.parse(localStorage.recipes)) {
        console.log(recipe.title);
        resultSelect += `<option value="${recipe.title}">${recipe.title}</option>`
  
    };
    resultSelect += `</select>`;

    // colocar o conteudo na navbar dependendo do estado de login do utilizador
document.querySelector("#recipeTitleSelect").innerHTML = resultSelect;

}
manageRecipesViewSelect();

function addQuizz() {
    Quizz.init();
    manageQuizzTable(Quizz.getQuizzes());
    document.querySelector("#formAddQuizz").addEventListener("submit", (event) => {
        event.preventDefault();
        // OBTER AS RECEITAS ATRAVES DE UM INPUT TIPO SELECT
        let select = document.querySelector("#recipe");
        let recipeValue = select.options[select.selectedIndex].value;

        try {
            Quizz.addQuizzes(
                recipeValue,
                document.querySelector("#txtQuizzQuestion").value,
                document.querySelector("#txtQuizzAnswer1").value,
                document.querySelector("#txtQuizzAnswer2").value,
                document.querySelector("#txtQuizzAnswer3").value,
                document.querySelector("#txtQuizzAnswer4").value,
                document.querySelector("#txtQuizzCorrectAnswer").value,
                document.querySelector("#quizzID").value
            )
            alert("Quizz was added")
            manageQuizzTable(Quizz.getQuizzes());
            location.reload()
        } catch (error) {
            alert(error.message)
        }
    })
}

function manageQuizzTable(quizzes = []) {
    const table = document.querySelector('table')

    table.innerHTML = `
    <tr class = "table-bordered">
        <th>Title</th><th>Question</th><th>Answer1</th><th>Answer2</th><th>Answer3</th><th>Answer4</th><th>Correct Anwer</th><th>Quizz ID</th>
    </tr>`

    let result = ''
    for (let quizz of quizzes) {
        result += `
                <tr class = 'quizzRow'>
                    <td>${quizz.title}</td>
                    <td>${quizz.question}</td>
                    <td>${quizz.answer1}</td>
                    <td>${quizz.answer2}</td>
                    <td>${quizz.answer3}</td>
                    <td>${quizz.answer4}</td>
                    <td>${quizz.correctAnswer}</td>
                    <td>${quizz.quizzID}</td><td> <button class = "btnRemove btn-danger removeQuizz" id = "${quizz.quizzID}">Remove</button>   </td>
                </tr>
        `
    }
    table.innerHTML += result
}

addQuizz();

const btnsRemoveQuizz = document.getElementsByClassName('removeQuizz');

for (const button of btnsRemoveQuizz) {
    button.addEventListener('click', () => {
        if (confirm(`Are you sure you want to remove the Quizz with the ID "${button.id}"?`)) {
            Quizz.removeQuizzes(button.id);
            location.reload();
        }
    })
}