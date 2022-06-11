import { makeAutoObservable } from "mobx";
import instance from "./instance";

class IngredientsStore {
  ingredients = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchIngredients = async () => {
    try {
      const response = await instance.get("/ingredients");
      this.ingredients = response.data;
    } catch (error) {
      console.error("fetching error", error);
    }
  };

  createIngredient = async (ingredient, setShowError, setShowSuccess) => {
    try {
      const response = await instance.post("/ingredients/create", ingredient);

      this.ingredients.push(response.data);
      setShowSuccess(true);
    } catch (error) {
      console.error("creating error", error.response);
      setShowError(true);
    }
  };
}
const ingredientsStore = new IngredientsStore();
ingredientsStore.fetchIngredients();
export default ingredientsStore;
