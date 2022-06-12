import RecipeCat from "./RecipeCat";
import RecipeIng from "./RecipeIng";
import { observer } from "mobx-react";
import Card from "react-bootstrap/Card";
import defaultImage from "../images/defaultImage.png";
function Recipe({ recipe }) {
  const categoriesPopulate = recipe.categories.map((category) => {
    return <RecipeCat key={category._id} category={category} />;
  });

  const ingredientsPopulate = recipe.ingredients.map((ingredient) => {
    return <RecipeIng key={ingredient._id} ingredient={ingredient} />;
  });

  return (
    <Card
      style={{
        width: "18rem",
        height: "25rem",
        margin: "1rem",
        borderRadius: "10px",
        borderWidth: "1px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3)",
      }}
    >
      <Card.Img
        variant="top"
        // className="one-recipe-img"
        alt="recipeImage"
        src={recipe.image}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = defaultImage;
        }}
        style={{
          height: "45%",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <Card.Body>
        <Card.Title>{recipe.name}</Card.Title>
        <Card.Text style={{ margin: "4px" }}>{categoriesPopulate}</Card.Text>
        <Card.Text style={{ margin: "4px" }}>{ingredientsPopulate}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default observer(Recipe);

{
  /* <div className="one-recipe">
      <img className="one-recipe-img" alt="recipeImage" src={recipe.image}></img>
      <div>{recipe.name}</div>
      <div>{categoriesPopulate}</div>
      <div className="one-recipe-ingredients">{ingredientsPopulate}</div>
    </div> */
}
