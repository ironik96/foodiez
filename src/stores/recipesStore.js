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

  applyFilters = (localUser, filters) => {
    const noFilters =
      JSON.stringify(filters) === JSON.stringify(this.defaultFilters);

    const isUserRecipe = (recipeUser, filterUser) =>
      recipeUser?._id === filterUser._id;

    const hasCategories = (recipeCategories, filterCategories) =>
      filterCategories.length === 0 ||
      filterCategories.every((cat) =>
        recipeCategories.some(({ name }) => name === cat)
      );

    const validIngredients = (
      recipeIngredients,
      filterIngredients,
      filterIn
    ) => {
      if (filterIn)
        return (
          filterIngredients.length === 0 ||
          filterIngredients.every((ing) =>
            recipeIngredients.some(({ name }) => name === ing)
          )
        );
      return !filterIngredients.some((ing) =>
        recipeIngredients.some(({ name }) => name === ing)
      );
    };

    if (noFilters) return (this.filteredRecipes = [...this.recipes]);

    this.filteredRecipes = this.recipes.filter(
      ({ categories, ingredients, user }) => {
        const condition =
          hasCategories(categories, filters.categories) &&
          validIngredients(ingredients, filters.withIngredients, true) &&
          validIngredients(ingredients, filters.withoutIngredients, false);

        return filters.isUserRecipe
          ? isUserRecipe(user, localUser) && condition
          : condition;
      }
    );
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
