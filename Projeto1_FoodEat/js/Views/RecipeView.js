import * as Recipe from "../models/RecipeModel.js";

function recipeView() {
Recipe.init();

  const recipe = Recipe.getCurrentRecipe();
  document.querySelector("#recipeName").innerHTML = recipe.title;
  document.querySelector("#recipeType").innerHTML = recipe.type;
  document.querySelector("#recipeDescription").innerHTML = recipe.description;
  document.querySelector("#recipePhoto").src = recipe.image;
}

recipeView();