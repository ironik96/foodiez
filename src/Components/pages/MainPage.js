import IngredientCreateModal from "../modals/IngredientCreateModal";
import RecipesList from "../RecipesList";
import CategoryCreateModal from "../modals/CategoryCreateModal";
import RecipeCreateModal from "../modals/RecipeCreateModal";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const MainPage = () => {
  return (
    <>
      {authStore.user && (
        <div className="add-buttons-container">
          <CategoryCreateModal />
          <IngredientCreateModal />
          <RecipeCreateModal />
        </div>
      )}
      <RecipesList />
    </>
  );
};

export default observer(MainPage);
