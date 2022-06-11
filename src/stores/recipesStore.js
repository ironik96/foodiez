import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RecipesStore {
  constructor() {
    makeAutoObservable(this);
  }

  recipes = [];
  filteredRecipes = [];
  filter = "";
  defaultFilters = {
    isUserRecipe: false,
    categories: [],
    withIngredients: [],
    withoutIngredients: [],
  };

  setFilter = (newFilter) => {
    this.filter = newFilter;
    this.filterRecipes();
  };

  setRecipes = (newRecipes) => {
    this.recipes = [...newRecipes];
    this.filterRecipes();
  };

  filterRecipes = () => {
    this.filteredRecipes = this.recipes.filter(
      ({ categories }) =>
        categories.some(({ name }) => name.includes(this.filter)) ||
        categories.length === 0
    );
  };

  fetchRecipes = async () => {
    try {
      const response = await instance.get("/recipes");
      this.setRecipes(response.data);
    } catch (error) {
      console.error("fetching error", error);
    }
  };

  createRecipe = async (recipe) => {
    try {
      const response = await instance.post("recipes/create", recipe);
      this.fetchRecipes();
    } catch (error) {
      alert("Must enter a recipe name");
      console.log(error);
    }
  };
}
const recipesStore = new RecipesStore();
recipesStore.fetchRecipes();
export default recipesStore;
