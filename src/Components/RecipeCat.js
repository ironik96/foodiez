import { observer } from "mobx-react";
function RecipeCat({ category }) {
  return <div>{category.name}</div>;
}

export default observer(RecipeCat);
