import RecipeCat from "./RecipeCat";
import RecipeIng from "./RecipeIng";
import Card from "react-bootstrap/Card";
function Recipe({ recipe }) {
  const categoriesPopulate = recipe.categories.map((category) => {
    return <RecipeCat name={category.name} />;
  });

  const ingredientsPopulate = recipe.ingredients?.map((ingredient) => {
    return <RecipeIng name={ingredient.name} />;
  });

  return (
    <div className="one-recipe">
      <img
        className="one-recipe-img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/2560px-Open_book_nae_02.svg.png"
      ></img>
      <div>{recipe.name}</div>
      <div>{categoriesPopulate}</div>
      <div className="one-recipe-ingredients">{ingredientsPopulate}</div>
      <hr />
    </div>
  );
}

export default Recipe;
