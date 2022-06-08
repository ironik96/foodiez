import categoriesStore from "../stores/categoriesStore";
import React, { Component } from "react";
import { observer } from "mobx-react";

function CategoriesList() {
  const categoriesList = categoriesStore.categories?.map((category) => {
    return <p key={category._id}>{category.name}</p>;
  });
  return (
    <div>
      <h1>{categoriesList}</h1>
    </div>
  );
}

export default observer(CategoriesList);
