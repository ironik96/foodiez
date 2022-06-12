import { observer } from "mobx-react";

const style = {
  backgroundColor: "hsl(142, 28%, 41%)",
  fontSize: "16px",
  color: "white",
  padding: "8px",
  borderRadius: "100px",
};
function RecipeCat({ category }) {
  return <span style={style}>{category.name}</span>;
}

export default observer(RecipeCat);
