import Button from "react-bootstrap/Button";
import { observer } from "mobx-react";
function RecipeCat({ category }) {
  return (
    <div style={{ margin: "2px", display: "inline" }}>
      <Button size="sm" variant="dark">
        {category.name}
      </Button>
    </div>
  );
}

export default observer(RecipeCat);
