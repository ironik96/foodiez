import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoriesList from "./Components/CategoriesList";
import RecipesList from "./Components/RecipesList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <CategoriesList />
      <RecipesList />
    </div>
  );
}

export default App;
