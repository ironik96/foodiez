import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoriesList from "./Components/CategoriesList";
import IngredientCreateModal from "./Components/IngredientCreateModal";
import RecipesList from "./Components/RecipesList";

function App() {
  return (
    <div className="App">
      <CategoriesList />
      <IngredientCreateModal />
      <RecipesList />
    </div>
  );
}

export default App;
