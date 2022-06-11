import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoriesStore {
  categories = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCategories = async () => {
    try {
      const response = await instance.get("/categories");
      this.categories = response.data;
    } catch (error) {
      console.error("fetching error", error);
    }
  };

  createCategory = async (category) => {
    try {
      const response = await instance.post("categories/create", category);
      this.categories.push(response.data);
    } catch (error) {
      console.error("creating error", error);
    }
  };
}
const categoriesStore = new CategoriesStore();
categoriesStore.fetchCategories();
export default categoriesStore;
