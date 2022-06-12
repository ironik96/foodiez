import { Modal, Button, Form, InputGroup, ModalBody } from "react-bootstrap";
import { useState, useRef } from "react";
import recipesStore from "../../stores/recipesStore";
import categoriesStore from "../../stores/categoriesStore";
import ingredientsStore from "../../stores/ingredientStore";
import authStore from "../../stores/authStore";

const FiltersModal = ({ modalShow, closeModal }) => {
  const [filters, setFilters] = useState(recipesStore.defaultFilters);
  let isApplied = false;
  const initialFilters = useRef(filters);

  const handleIsUserRecipe = () => {
    const toggle = !filters.isUserRecipe;
    setFilters({ ...filters, isUserRecipe: toggle });
  };

  const handleCategory = (category) => {
    if (filters.categories.includes(category)) {
      setFilters({
        ...filters,
        categories: filters.categories.filter((c) => c !== category),
      });
    } else {
      setFilters({ ...filters, categories: [...filters.categories, category] });
    }
  };

  const handleIngredients = (ingredient) => {
    if (filters.withIngredients.includes(ingredient)) {
      return setFilters({
        ...filters,
        withIngredients: filters.withIngredients.filter(
          (i) => i !== ingredient
        ),
        withoutIngredients: [...filters.withoutIngredients, ingredient],
      });
    }

    if (filters.withoutIngredients.includes(ingredient)) {
      return setFilters({
        ...filters,
        withoutIngredients: filters.withoutIngredients.filter(
          (i) => i !== ingredient
        ),
      });
    }
    setFilters({
      ...filters,
      withIngredients: [...filters.withIngredients, ingredient],
    });
  };

  const clearFilters = () => setFilters(recipesStore.defaultFilters);

  const handleSubmit = (event) => {
    event.preventDefault();
    recipesStore.applyFilters(authStore.user, filters);
    isApplied = true;
    initialFilters.current = filters;
    closeModal();
  };

  const onExit = () => {
    if (isApplied) return;
    setFilters(initialFilters.current);
  };
  return (
    <Modal
      onSubmit={handleSubmit}
      show={modalShow}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={closeModal}
      onExit={onExit}
    >
      <Form onSubmit={handleSubmit}>
        <ModalBody className="filter-modal-form">
          <Modal.Header>
            <Modal.Title>Filter Recipes</Modal.Title>
          </Modal.Header>
          <UserRecipeButton
            isUserRecipe={filters.isUserRecipe}
            handleIsUserRecipe={handleIsUserRecipe}
          />
          <CategoriesList
            categories={filters.categories}
            handleCategory={handleCategory}
          />
          <IngredientsList
            withIngredients={filters.withIngredients}
            withoutIngredients={filters.withoutIngredients}
            handleIngredients={handleIngredients}
          />
        </ModalBody>
        <Modal.Footer>
          <Button variant="lite" onClick={clearFilters}>
            Clear
          </Button>
          <Button
            variant="dark"
            type="submit"
            value="Submit"
            onClick={handleSubmit}
          >
            Apply
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

const UserRecipeButton = ({ isUserRecipe, handleIsUserRecipe }) => {
  if (!authStore.user) return null;
  const [state, style] = isUserRecipe
    ? ["success", "fib-basic"]
    : ["", "fib-basic fib-unselected"];
  return (
    <div>
      <Button variant={state} className={style} onClick={handleIsUserRecipe}>
        My Recipes
      </Button>
    </div>
  );
};

const CategoriesList = ({ categories, handleCategory }) => {
  const buttons = categoriesStore.categories.map(({ name }) => (
    <CategoriesButton
      key={name}
      name={name}
      selected={categories.includes(name)}
      handleCategory={handleCategory}
    />
  ));

  return (
    <div>
      <InputGroup.Text>Categories</InputGroup.Text>
      <div className="filter-option-list-wrapper">{buttons}</div>
    </div>
  );
};

const CategoriesButton = ({ name, selected, handleCategory }) => {
  const [state, style] = selected
    ? ["success", "fib-basic"]
    : ["", "fib-basic fib-unselected"];
  return (
    <div>
      <Button
        variant={state}
        className={style}
        onClick={() => {
          handleCategory(name);
        }}
      >
        {name}
      </Button>
    </div>
  );
};
const IngredientsList = ({
  withIngredients,
  withoutIngredients,
  handleIngredients,
}) => {
  const buttons = ingredientsStore.ingredients.map(({ name }) => (
    <IngredientsButton
      key={name}
      name={name}
      withIngredients={withIngredients}
      withoutIngredients={withoutIngredients}
      handleIngredients={handleIngredients}
    />
  ));

  return (
    <div>
      <InputGroup.Text>Ingredients</InputGroup.Text>
      <div className="filter-option-list-wrapper">{buttons}</div>
    </div>
  );
};

const IngredientsButton = ({
  name,
  withIngredients,
  withoutIngredients,
  handleIngredients,
}) => {
  let state = "";
  if (withIngredients.includes(name)) state = "success";
  if (withoutIngredients.includes(name)) state = "danger";
  const style = state === "" ? "fib-basic fib-unselected" : "fib-basic";
  return (
    <div>
      <Button
        variant={state}
        className={style}
        onClick={() => {
          handleIngredients(name);
        }}
      >
        {name}
      </Button>
    </div>
  );
};

export default FiltersModal;
