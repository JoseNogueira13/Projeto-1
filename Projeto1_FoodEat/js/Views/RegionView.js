import * as Recipe from "../models/RecipeModel.js";
import * as Region from "../models/RegionModel.js";

function regionStart() {
    Region.init();

    const region = Region.getCurrentRegion();
    
    document.querySelector("#regionTitle").innerHTML = region.title[0].toUpperCase() + region.title.slice(1); 
    
    document.querySelector("#regionImage").src = region.image;

}

regionStart();


function catalogView() {
    Recipe.init();
    renderCatalog(Recipe.getRecipes());
}

// MOSTRAR AS RECEITAS NA PAGINA INICIAL

function renderCatalog(recipes = []) {
    const region = Region.getCurrentRegion();
    let result = "";
    let recipeAsia = [];
    let recipeAfrica = [];
    let recipeEurope = [];


    recipeAsia = recipes.filter((recipe) => recipe.regionID == "asia");
    
    recipeAfrica = recipes.filter((recipe) => recipe.regionID == "africa");


    recipeEurope = recipes.filter((recipe) => recipe.regionID == "europe");

    if (region.title == "asia") {
        for (let recipe of recipeAsia) {
            result += generateCard(recipe) 
        }
         
    } else if (region.title == "africa") {
        for (let recipe of recipeAfrica) {
            result += generateCard(recipe)
        }
        
    }else if (region.title == "europe") {
        for (let recipe of recipeEurope) {
            result += generateCard(recipe)
        }
        
    }
    

    
    
    
    
     document.querySelector("#myRegionCatalog").innerHTML = result;
    
    // BOTÃO PARA ABRIR A PAGINA DA RECEITA SELECIONADA
    const btnsSeeMore = document.getElementsByClassName("view");
    for (const button of btnsSeeMore) {
        button.addEventListener("click", () => {
            Recipe.setCurrentRecipe(button.id);
            location.href = "../html/recipe.html";
        });
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


    result += ` 
                </div>
            </div>
        </div> `;
    
        
    
    
    
    return result;
}

catalogView();