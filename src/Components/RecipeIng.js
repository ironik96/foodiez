import { observer } from "mobx-react";
function RecipeIng({ ingredient }) {
  return <div>{ingredient.name}</div>;
}

export default observer(RecipeIng);
