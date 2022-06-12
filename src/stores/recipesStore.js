import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RecipesStore {
  constructor() {
    makeAutoObservable(this);
  }

  recipes = [];
  filteredRecipes = [];
  defaultFilters = {
    isUserRecipe: false,
    categories: [],
    withIngredients: [],
    withoutIngredients: [],
  };

  resetFilters = () => (this.filteredRecipes = [...this.recipes]);

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

    if (noFilters) return this.resetFilters();

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
    this.filteredRecipes = [...newRecipes];
  };

  fetchRecipes = async () => {
    try {
      const response = await instance.get("/recipes");
      this.setRecipes(response.data);
    } catch (error) {
      console.error("fetching error", error);
    }
  };

  createRecipe = async (recipe, setShowError, setShowSuccess) => {
    try {
      await instance.post("recipes/create", recipe);
      this.fetchRecipes();
      setShowSuccess(true);
    } catch (error) {
      setShowError(true);
    }
  };
}
const recipesStore = new RecipesStore();
recipesStore.fetchRecipes();
export default recipesStore;
