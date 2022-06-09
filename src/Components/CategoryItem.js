import React, { Component } from "react";
import { observer } from "mobx-react";
import Button from "react-bootstrap/Button";
import recipesStore from "../stores/recipesStore";

function CategoryItem({ category }) {
  return (
    <div style={{ display: "inline", margin: "10px" }}>
      <Button
        variant="outline-dark"
        size="lg"
        onClick={() => recipesStore.setFilter(category.name)}
      >
        {category.name}
      </Button>
    </div>
  );
}

export default observer(CategoryItem);

/*


        onClick={() => {
          console.log("clicky");
          setCurrentCategory(category.name);
        }}
        */
