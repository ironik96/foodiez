import recipesStore from "../stores/recipesStore";
import React, { Component } from "react";
import { observer } from "mobx-react";
import Recipe from "./Recipe";

function RecipesList() {
  const recipesList = recipesStore.recipes.map((recipe) => (
    <Recipe key={recipe._id} recipe={recipe} />
  ));
  return (
    <div>
      <div>My Recipes </div>
      <hr />
      <div className="recipe-container">{recipesList}</div>
    </div>
  );
}

export default observer(RecipesList);