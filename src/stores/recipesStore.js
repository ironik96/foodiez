import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RecipesStore {
  Recipes = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchRecipes = async () => {
    try {
      const response = await instance.get("/recipes");
      this.recipes = response.data;
      console.log(response.data);
    } catch (error) {
      console.error("fetching error", error);
    }
  };

  createRecipe = async (recipe) => {
    try {
      const response = await instance.post("recipes/create", recipe);
      console.log(response.data);
      this.recipes.push(response.data);
    } catch (error) {
      console.error("creating error", error);
    }
  };
}
const recipesStore = new RecipesStore();
recipesStore.fetchRecipes();
export default recipesStore;
