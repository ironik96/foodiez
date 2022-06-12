import RecipeCat from "./RecipeCat";
import RecipeIng from "./RecipeIng";
import { observer } from "mobx-react";
import Card from "react-bootstrap/Card";
import defaultImage from "../images/defaultImage.png";
import { Link } from "react-router-dom";

const cardTextStyle = {
  display: "flex",
  gap: "4px",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
};

function Recipe({ recipe }) {
  return (
    <Link className="recipe-card-link" to={`/recipe/${recipe.slug}`}>
      <Card
        style={{
          width: "18rem",
          height: "max-content",
          margin: "1rem",
          borderRadius: "10px",
          borderWidth: "1px",
        }}
        className="recipe-card"
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
            height: "200px",
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
        </Card.Body>
      </Card>
    </Link>
  );
}

export default observer(Recipe);
