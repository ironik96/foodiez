import categoriesStore from "../stores/categoriesStore";
import React, { Component } from "react";
import { observer } from "mobx-react";

function CategoriesList() {
  const categoriesList = categoriesStore.categories.map((category) => {
    return <h1>{category.name}</h1>;
  });
  return (
    <div>
      <h6>{categoriesList}</h6>
    </div>
  );
}

export default observer(CategoriesList);
