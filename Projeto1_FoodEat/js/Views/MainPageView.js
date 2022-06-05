import * as User from "../Models/UserModel.js";
import * as Recipe from "../models/RecipeModel.js";

function catalogView() {
    Recipe.init();
    renderCatalog(Recipe.getRecipes());
}

// MOSTRAR AS RECEITAS NA PAGINA INICIAL

function renderCatalog(recipes = []) {
    let result = "";
    let recipeTitle = [];
    let recipeAsia = [];
    let recipeAfrica = [];
    let recipeEurope = [];

    for(const recipe of recipes){
        if (recipe.regionID == asia) {
            recipeAsia.push(recipe)
        }
        if (recipe.regionID == africa) {
            recipeAfrica.push(recipe)
        }
        if (recipe.regionID == europe) {
            recipeEurope.push(recipe)
        }
        num = 0;
        if(num = 0 && recipe.type == starter){
         result += generateCard(recipe);
         num++;
        }else if(num = 1 && recipe.type == mainDish){
         result += generateCard(recipe);
         num++;
        }else if(num = 2 && recipe.type == dessert){
         result += generateCard(recipe);
         num++;
        }else{
            return;
        }
    } 

    for (let i = 0; i < recipeAsia.length; i++) {
        if (i <= 2 && !recipeTitle.includes(recipe.title)){
            recipeTitle.push(recipe.title);
            result += generateCard(recipe);
            i++;
        }
    }
    for (let i = 0; i < recipes.length; i++) {
        
        if (i <= 2 && !recipeTitle.includes(recipe.title)){
            recipeTitle.push(recipe.title);
            result += generateCard(recipe);
            i++;
        }
    }
    for (let i = 0; i < recipes.length; i++) {
        
        if (i <= 2 && !recipeTitle.includes(recipe.title)){
            recipeTitle.push(recipe.title);
            result += generateCard(recipe);
            i++;
        }
    }
    document.querySelector("#myRecipeCatalog").innerHTML = result;
    
    // BOTÃO PARA ABRIR A PAGINA DA RECEITA SELECIONADA
    const btnsSeeMore = document.getElementByClassName("view");
    for (const button of btnsSeeMore) {
        button.addEventListener('click', () => {
            Recipe.setCurrentRecipe(button.id);
            location.href = "./html/recipe.html";
        })
    }

    // BOTÃO DE REMOVER APENAS VISIVEL PARA O ADMIN
        const btnsRemove = document.getElementByClassName("remove");
        for (const button of btnsRemove) {
            button.addEventListener('click', () => {
              if (confirm("Do you wish to remove this recipe?")){
                Recipe.removeRecipes(button.id);
                location.reload();
              }
                
            })
        } 
    
}

// FUNÇAO PARA CRIAR A CARTA COM AS RECEITAS

function generateCard(recipe) {
    let result = `
    <div class="col">
            <div class="card mb-3" style="widht: 300px; ">
                <img src="${recipe.image}" class="card-img-top" style="height: 300px;">
                <div class="card-body">
                    <h5 class="card-title">${recipe.title}</h5>
                    <p class="card-text">${recipe.description}</p>
                    <button id="${recipe.title}" class="btn btn-primary view">See more</button>`;



    if (sessionStorage.currentUser.type === "admin") {
        result += `<button id="${recipe.title}" class="btn btn-danger remove">Remove</button>`;
    }
    result += ` 
                </div>
            </div>
        </div> `;
  return result;
}

catalogView();
