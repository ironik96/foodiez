import Button from "react-bootstrap/Button";
import { observer } from "mobx-react";
function RecipeIng({ ingredient }) {
  return (
    <div style={{ margin: "2px", display: "inline" }}>
      <Button size="sm" variant="secondary">
        {ingredient.name}
      </Button>
    </div>
  );
}

export default observer(RecipeIng);
