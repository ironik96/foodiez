import categoriesStore from "../stores/categoriesStore";
import React, { useState } from "react";
import { observer } from "mobx-react";
import CategoryItem from "./CategoryItem";
import CategoryCreateModal from "./modals/CategoryCreateModal";

function CategoriesList() {
  const categoriesList = categoriesStore.categories.map((category) => {
    return <CategoryItem key={category._id} category={category} />;
  });
  return (
    <div>
      {categoriesList}
      <CategoryCreateModal />
    </div>
  );
}

export default observer(CategoriesList);

/*

  const [currentCategory, setCurrentCategory] = useState("all");

  
        setCurrentCategory={setCurrentCategory}
*/
