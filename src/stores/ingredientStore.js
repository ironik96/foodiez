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
      // console.log(response.data);
    } catch (error) {
      console.error("fetching error", error);
    }
  };

  createIngredient = async (ingredient) => {
    try {
      const response = await instance.post("/ingredients/create", ingredient);
      console.log(response.data);
      this.ingredients.push(response.data);
    } catch (error) {
      console.error("creating error", error);
    }
  };
}
const ingredientsStore = new IngredientsStore();
ingredientsStore.fetchIngredients();
export default ingredientsStore;
