import recipesStore from "../stores/recipesStore";
import React from "react";
import { observer } from "mobx-react";
import Recipe from "./Recipe";

function RecipesList() {
  const recipesList = recipesStore.filteredRecipes.map((recipe, index) => (
    <Recipe key={recipe._id} recipe={recipe} />
  ));
  return <div className="recipe-container">{recipesList}</div>;
}

export default observer(RecipesList);
