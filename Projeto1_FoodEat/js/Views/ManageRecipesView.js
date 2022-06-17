import * as Recipe from"../Models/RecipeModel.js";

function manageRecipesViewSelect() {
    let resultSelect = `<label for="regionsSelect">Choose region:</label>
  <select id="region" name="region">`
  console.log(JSON.parse(localStorage.regions));
    for (const region of JSON.parse(localStorage.regions)) {
        console.log(region.title);
        resultSelect += `<option value="${region.title}">${region.title}</option>`
  
    };
    resultSelect += `</select>`;

    // colocar o conteudo na navbar dependendo do estado de login do utilizador
document.querySelector("#regionsSelect").innerHTML = resultSelect;

}
manageRecipesViewSelect();
   


function addRecipe() {
    Recipe.init();
    manageRecipeTable(Recipe.getRecipes());
    document.querySelector("#formAddRecipe").addEventListener("submit", (event) => {
        event.preventDefault();
        // OBTER A REGIAO ATRAVES DO INPUT TIPO SELECT
        let select = document.querySelector("#region");
        let regionValue = select.options[select.selectedIndex].value;
        
        try {
            Recipe.addRecipes(
                document.querySelector("#txtImage").value,
                document.querySelector("#txtRecipeTitle").value,
                document.querySelector("#txtDescription").value,
                document.querySelector("#txtRecipeWritten").value,
                document.querySelector("#txtVideo").value,
                document.querySelector('input[name="radioType"]:checked').value,
                regionValue,
                
            )
            alert("Recipe was added")
            manageRecipeTable(Recipe.getRecipes());
            location.reload()
        } catch (error) {
            alert(error.message);
            
        }
    });
}

function manageRecipeTable(recipes = []) {
    const table = document.querySelector('table')

    table.innerHTML = `
    <tr class = "table-bordered">
        <th>Image</th><th>Title</th><th>Description</th><th>Recipe Written</th><th>Recipe Video</th><th>Type</th><th>Region ID</th>
    </tr>`

    let result = ''
    for (let recipe of recipes) {
        result += `
                <tr class = 'recipeRow'>
                    <td>${recipe.image}</td>
                    <td>${recipe.title}</td>
                    <td>${recipe.description}</td>
                    <td>${recipe.recipeWritten}</td>
                    <td>${recipe.recipeVideo}</td>
                    <td>${recipe.type}</td>
                    <td>${recipe.regionID}</td><td>    <button class = "btnRemove btn-danger removeRecipe" id = "${recipe.title}">Remove</button>   </td>
                </tr>
                `
    }
    table.innerHTML += result
}

addRecipe();


const btnsRemoveRecipe = document.getElementsByClassName('removeRecipe');

for (const button of btnsRemoveRecipe) {
    button.addEventListener('click', () => {
        if (confirm(`Are you sure you want to remove the recipe "${button.id}"?`)) {
            Recipe.removeRecipes(button.id);
            location.reload();
        }
    })
}