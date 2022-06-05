class Recipe {
    image = "";
    title = "";
    description = "";
    recipeWritten = [];
    recipeVideo = "";
    type = "";
    regionID = 0;
    
    
    constructor(image, title, description, recipeWritten, recipeVideo, type, regionID) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.recipeWritten = recipeWritten;
        this.recipeVideo = recipeVideo;
        this.type = type;
        this.regionID = regionID;
    }
}

let recipes;

// CARREGAR RECEITAS NA LOCAL STORAGE

export function init() {
    recipes = localStorage.recipes ? JSON.parse(localStorage.recipes) : [];
}

// ADICIONAR RECEITAS

export function addRecipes(image, title, description, recipeWritten, recipeVideo, type, regionID) {
    if (recipes.some((recipe) => recipe.title === title)) {
        throw Error(`The recipe ${recipe.title} already exists!`);
    }else {
        recipes.push(new Recipe(image, title, description, recipeWritten, recipeVideo, type, regionID));
        localStorage.setItem("recipes", JSON.stringify(recipes))
    }
}

// REMOVER RECEITAS

export function removeRecipes (title) {
    recipes = recipes.filter((recipe) => recipe.title !== title);
    localStorage.setItem("recipes", JSON.stringify(recipes));
}


// DEFINIR A RECEITA ATUAL

export function setCurrentRecipe (title) {
    localStorage.setItem("recipe", title);
}

// OBTER A INFORMAÇAO DA RECEITA ESCOLHIDA

export function getCurrentRecipe () {
    return recipes.find((recipe) => recipe.title === localStorage.getItem("recipe"));
}

// OBTER AS RECEITAS

export function getRecipes (){
    return recipes;
}




