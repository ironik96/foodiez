import recipesStore from "../stores/recipesStore";
import React, { Component } from "react";
import { observer } from "mobx-react";
import Recipe from "./Recipe";
import RecipeCreateModal from "./RecipeCreatModal";

function RecipesList() {
  const recipesList = recipesStore.recipes.map((recipe) => (
    <Recipe key={recipe._id} recipe={recipe} />
  ));
  return (
    <div>
      <div>My Recipes </div>
      <hr />
      <div className="recipe-container">{recipesList}</div>
      <RecipeCreateModal />
    </div>
  );
}

export default observer(RecipesList);
