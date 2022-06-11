import CategoriesList from "./Components/CategoriesList";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import IngredientCreateModal from "./Components/modals/IngredientCreateModal";
import RecipesList from "./Components/RecipesList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content-container">
        <CategoriesList />
        <IngredientCreateModal />
        <RecipesList />
      </div>
    </div>
  );
}

export default App;
