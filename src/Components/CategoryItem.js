import categoriesStore from "../stores/categoriesStore";
import React, { Component } from "react";
import { observer } from "mobx-react";
import Button from "react-bootstrap/Button";

function CategoryItem({ category }) {
  return (
    <div style={{ display: "inline", margin: "10px" }}>
      <Button variant="outline-dark" size="lg">
        {category.name}
      </Button>
    </div>
  );
}

export default observer(CategoryItem);
