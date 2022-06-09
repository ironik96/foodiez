import RecipeCat from "./RecipeCat";
import RecipeIng from "./RecipeIng";
import { observer } from "mobx-react";
function Recipe({ recipe }) {
  const placeHolderImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/2560px-Open_book_nae_02.svg.png";

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
        src={placeHolderImage}
      ></img>
      <div>{recipe.name}</div>
      <div>{categoriesPopulate}</div>
      <div className="one-recipe-ingredients">{ingredientsPopulate}</div>
    </div>
  );
}

export default observer(Recipe);
