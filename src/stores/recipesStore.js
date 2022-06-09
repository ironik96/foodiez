import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RecipesStore {
  constructor() {
    makeAutoObservable(this);
  }

  recipes = [];
  filteredRecipes = [];
  filter = "";

  setFilter = (newFilter) => {
    this.filter = newFilter;
    this.filterRecipes();
  };

  setRecipes = (newRecipes) => {
    this.recipes = [...newRecipes];
    this.filterRecipes();
  };

  filterRecipes = () => {
    this.filteredRecipes = this.recipes.filter(({ categories }) =>
      categories.some(({ name }) => name.includes(this.filter))
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
      console.log(response.data);
      // this.setRecipes([...this.recipes, response.data]);
      this.fetchRecipes();
    } catch (error) {
      console.error("creating error", error);
    }
  };
}
const recipesStore = new RecipesStore();
recipesStore.fetchRecipes();
export default recipesStore;
