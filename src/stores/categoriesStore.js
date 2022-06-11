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

  createCategory = async (category, setShowError, setShowSuccess) => {
    try {
      const response = await instance.post("categories/create", category);
      this.categories.push(response.data);

      setShowSuccess(true);
    } catch (error) {
      console.error("creating error", error);

      setShowError(true);
    }
  };
}
const categoriesStore = new CategoriesStore();
categoriesStore.fetchCategories();
export default categoriesStore;
