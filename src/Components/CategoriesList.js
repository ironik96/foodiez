import categoriesStore from "../stores/categoriesStore";
import React, { Component } from "react";
import { observer } from "mobx-react";
import CategoryItem from "./CategoryItem";
import CategoryCreateModal from "./CategoryCreateModal";

function CategoriesList() {
  const categoriesList = categoriesStore.categories.map((category) => {
    return <CategoryItem category={category} />;
  });
  return (
    <div>
      {categoriesList}
      <CategoryCreateModal />
    </div>
  );
}

export default observer(CategoriesList);
