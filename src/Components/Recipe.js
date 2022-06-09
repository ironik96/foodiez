import RecipeCat from "./RecipeCat";
import RecipeIng from "./RecipeIng";
import { observer } from "mobx-react";
function Recipe({ recipe }) {
  const categoriesPopulate = recipe.categories.map((category) => {
    return <RecipeCat key={category._id} category={category} />;
  });

  const ingredientsPopulate = recipe.ingredients.map((ingredient) => {
    return <RecipeIng key={ingredient._id} ingredient={ingredient} />;
  });

  return (
    <div className="one-recipe">
      <img
        className="one-recipe-img"
        alt="placeholder"
        src={recipe.image}
      ></img>
      <div>{recipe.name}</div>
      <div>{categoriesPopulate}</div>
      <div className="one-recipe-ingredients">{ingredientsPopulate}</div>
    </div>
  );
}

export default observer(Recipe);
