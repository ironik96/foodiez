import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoriesList from "./Components/CategoriesList";
import IngredientCreateModal from "./Components/IngredientCreateModal";

function App() {
  return (
    <div className="App">
      <div>
        <CategoriesList />
        <IngredientCreateModal />
      </div>
    </div>
  );
}

export default App;
