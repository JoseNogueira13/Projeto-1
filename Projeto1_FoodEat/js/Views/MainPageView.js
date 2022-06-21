import * as User from "../Models/UserModel.js";
import * as Recipe from "../models/RecipeModel.js";

function catalogView() {
    Recipe.init();
    renderCatalog(Recipe.getRecipes());
}

// MOSTRAR AS RECEITAS NA PAGINA INICIAL

function renderCatalog(recipes = []) {
    let result = "<h1 id='title'>Recipes From Around the World</h1> <hr> <p></p>";
    let entree = [];
    let main = [];
    let dessert = [];
    let recipeAsia = [];
    let recipeAfrica = [];
    let recipeEurope = [];


    entree = recipes.filter((recipe) => recipe.type == "entree");

    main = recipes.filter((recipe) => recipe.type == "main");

    dessert = recipes.filter((recipe) => recipe.type == "dessert");

    recipeAsia = recipes.filter((recipe) => recipe.regionID == "asia");

    const recipeAsiaEntree = recipeAsia.filter((recipe) => recipe.type == "entree");
    const recipeAsiaMain = recipeAsia.filter((recipe) => recipe.type == "main");
    const recipeAsiaDessert = recipeAsia.filter((recipe) => recipe.type == "dessert");
    
    recipeAfrica = recipes.filter((recipe) => recipe.regionID == "africa");

    const recipeAfricaEntree = recipeAfrica.filter((recipe) => recipe.type == "entree");
    const recipeAfricaMain = recipeAfrica.filter((recipe) => recipe.type == "main");
    const recipeAfricaDessert = recipeAfrica.filter((recipe) => recipe.type == "dessert");

    recipeEurope = recipes.filter((recipe) => recipe.regionID == "europe");

    const recipeEuropeEntree = recipeEurope.filter((recipe) => recipe.type == "entree");
    const recipeEuropeMain = recipeEurope.filter((recipe) => recipe.type == "main");
    const recipeEuropeDessert = recipeEurope.filter((recipe) => recipe.type == "dessert");
    
    //  RECEITAS ENTRADA/PRATO PRINCIPAL/SOBREMESA DE QUALQUER REGIAO
    
    if (entree.length > 0) {
        result += generateCard(entree[Math.floor(Math.random() * entree.length)]);
    }

    if (main.length > 0) {
        result += generateCard(main[Math.floor(Math.random() * main.length)]);
    }

    if (main.length > 0) {
        result += generateCard(dessert[Math.floor(Math.random() * dessert.length)]);
    }

    result += `<h1 id='title1'>${recipeAsiaEntree[0].regionID[0].toUpperCase() + recipeAsiaEntree[0].regionID.slice(1)}</h1> <hr> <p></p>`

    // RECEITAS DA REGIAO "ASIA"
                                        
    if (recipeAsiaEntree.length > 0) {
        
        result += generateCard(recipeAsiaEntree[Math.floor(Math.random() * recipeAsiaEntree.length)]);
    }

    if (recipeAsiaMain.length > 0) {
        result += generateCard(recipeAsiaMain[Math.floor(Math.random() * recipeAsiaMain.length)]);
    }

    if (recipeAsiaDessert.length > 0) {
        result += generateCard(recipeAsiaDessert[Math.floor(Math.random() * recipeAsiaDessert.length)]);
    }

    result += `<h1 id='title1'>${recipeAfricaEntree[0].regionID[0].toUpperCase() + recipeAfricaEntree[0].regionID.slice(1)}</h1> <hr> <p></p>`

    // RECEITAS DA REGIAO "AFRICA"

    if (recipeAfricaEntree.length > 0) {
        result += generateCard(recipeAfricaEntree[Math.floor(Math.random() * recipeAfricaEntree.length)]);
    }

    if (recipeAfricaMain.length > 0) {
        result += generateCard(recipeAfricaMain[Math.floor(Math.random() * recipeAfricaMain.length)]);
    }

    if (recipeAfricaDessert.length > 0) {
        result += generateCard(recipeAfricaDessert[Math.floor(Math.random() * recipeAfricaDessert.length)]);
    }

    result += `<h1 id='title1'>${recipeEuropeEntree[0].regionID[0].toUpperCase() + recipeEuropeEntree[0].regionID.slice(1)}</h1> <hr> <p></p>`

    // RECEITAS DA REGIAO "EUROPA"
    
    if (recipeEuropeEntree.length > 0) {
        result += generateCard(recipeEuropeEntree[Math.floor(Math.random() * recipeEuropeEntree.length)]);
    }

    if (recipeEuropeMain.length > 0) {
        result += generateCard(recipeEuropeMain[Math.floor(Math.random() * recipeEuropeMain.length)]);
    }

    if (recipeEuropeDessert.length > 0) {
        result += generateCard(recipeEuropeDessert[Math.floor(Math.random() * recipeEuropeDessert.length)]);
    }

     document.querySelector("#myRecipeCatalog").innerHTML = result;
    
    // BOTÃO PARA ABRIR A PAGINA DA RECEITA SELECIONADA
    const btnsSeeMore = document.getElementsByClassName("view");
    for (const button of btnsSeeMore) {
        button.addEventListener("click", () => {
            Recipe.setCurrentRecipe(button.id);
            location.href = "./html/recipe.html";
        });
    }

    // BOTÃO DE REMOVER APENAS VISIVEL PARA O ADMIN
        const btnsRemove = document.getElementsByClassName("remove");
        for (const button of btnsRemove) {
            button.addEventListener('click', () => {
              if (confirm("Do you wish to remove this recipe?")){
                Recipe.removeRecipes(button.id);
                location.reload();
              }
                
            });
        } 
    
}

// FUNÇAO PARA CRIAR A CARTA COM AS RECEITAS
function generateCard(recipe) {
    let result = `
    <div class="col">
            <div class="card mb-3">
                <img src="${recipe.image}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${recipe.title}</h5>
                    <p class="card-text">${recipe.description}</p>
                    <button id="${recipe.title}" class="btn btn-primary view">See more</button>`;


    result += ` 
                </div>
            </div>
        </div> `;
    
        
    
    
    
    return result;
}

catalogView();