import CategoriesList from "./Components/CategoriesList";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import IngredientCreateModal from "./Components/modals/IngredientCreateModal";
import RecipesList from "./Components/RecipesList";
import CategoryCreateModal from "./Components/modals/CategoryCreateModal";
import RecipeCreateModal from "./Components/modals/RecipeCreateModal";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="content-container">
        <div className="add-buttons-container">
          <CategoryCreateModal />
          <IngredientCreateModal />
          <RecipeCreateModal />
        </div>
        <RecipesList />
      </div>
    </div>
  );
}

export default App;
