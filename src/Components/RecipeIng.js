import Button from "react-bootstrap/Button";
import { observer } from "mobx-react";
const style = {
  backgroundColor: "hsl(0, 0%, 57%)",
  fontSize: "16px",
  color: "white",
  padding: "0px 8px",
  borderRadius: "100px",
};

function RecipeIng({ ingredient }) {
  return <span style={style}>{ingredient.name}</span>;
}

export default observer(RecipeIng);
