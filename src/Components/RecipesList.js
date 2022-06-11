import recipesStore from "../stores/recipesStore";
import React from "react";
import { observer } from "mobx-react";
import Recipe from "./Recipe";
import RecipeCreateModal from "./modals/RecipeCreateModal";

function RecipesList() {
  const recipesList = recipesStore.filteredRecipes.map((recipe) => (
    <Recipe key={recipe._id} recipe={recipe} />
  ));
  return (
    <div>
      <div className="recipe-container">{recipesList}</div>
    </div>
  );
}

export default observer(RecipesList);
