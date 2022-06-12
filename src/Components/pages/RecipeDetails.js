import defaultImage from "../../images/defaultImage.png";
import { useParams } from "react-router-dom";
import RecipeCat from "../RecipeCat";
import recipesStore from "../../stores/recipesStore";

const RecipeDetailsStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const recipeTitleStyle = {
  fontSize: "36px",
  fontWeight: "bold",
};

const cardTextStyle = {
  display: "flex",
  gap: "4px",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  zIndex: 1000,
};

const RecipeDetails = () => {
  const { recipeSlug } = useParams();

  const recipe = recipesStore.getRecipeBySlug(recipeSlug);

  const categoriesPopulate = recipe.categories.map((category) => {
    return <RecipeCat key={category._id} category={category} />;
  });

  const ingStr = recipe.ingredients.map(({ name }) => name).join(", ");

  return (
    <div style={RecipeDetailsStyle}>
      <div style={recipeTitleStyle}>{recipe.name}</div>
      <hr style={{ backgroundColor: "hsl(142, 28%, 40%)", height: "5px" }} />
      <img
        alt="recipeImage"
        src={recipe.image}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = defaultImage;
        }}
        width="500px"
      />
      <div style={cardTextStyle}>{categoriesPopulate}</div>
      <div style={{ textAlign: "start" }}>
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          Ingredients:{" "}
        </span>
        <span>{ingStr}.</span>
      </div>
    </div>
  );
};

export default RecipeDetails;
