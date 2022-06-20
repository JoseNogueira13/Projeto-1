import * as Recipe from "../models/RecipeModel.js";
import * as Region from "../models/RegionModel.js";

function regionStart() {
    Region.init();

    const region = Region.getCurrentRegion();
    console.log(region);
    document.querySelector("#regionTitle").innerHTML = region.title;
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
        result += generateCard(recipeAsia[Math.floor(Math.random() * recipeAsia.length)])  
    } else if (region.title == "africa") {
        result += generateCard(recipeAfrica[Math.floor(Math.random() * recipeAfrica.length)])
    }else if (region.title == "europe") {
        result += generateCard(recipeEurope[Math.floor(Math.random() * recipeEurope.length)])
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