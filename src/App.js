import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { observer } from "mobx-react";
import { Route, Routes } from "react-router-dom";
import RecipeDetails from "./Components/pages/RecipeDetails";
import MainPage from "./Components/pages/MainPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/recipe/:recipeSlug" element={<RecipeDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default observer(App);
