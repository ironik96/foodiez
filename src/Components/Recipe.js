import RecipeCat from "./RecipeCat";
import RecipeIng from "./RecipeIng";
import { observer } from "mobx-react";
import Card from "react-bootstrap/Card";
import defaultImage from "../images/defaultImage.png";

const cardTextStyle = {
  display: "flex",
  gap: "4px",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
};

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
      }}
    >
      <Card.Img
        variant="top"
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
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Card.Title style={{ fontWeight: "bold" }}>{recipe.name}</Card.Title>
        <Card.Text style={cardTextStyle}>{categoriesPopulate}</Card.Text>
        <Card.Text style={cardTextStyle}>{ingredientsPopulate}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default observer(Recipe);
