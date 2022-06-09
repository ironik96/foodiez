import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import recipesStore from "../../stores/recipesStore";
import { MultiSelect } from "react-multi-select-component";
import categoriesStore from "../../stores/categoriesStore";
import ingredientsStore from "../../stores/ingredientStore";
import { observer } from "mobx-react";

function RecipeCreateModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newRecipe, setNewRecipe] = useState({
    name: "",
    categories: [],
    ingredients: [],
  });

  //handles categories multiselect content
  const cats = categoriesStore.categories;
  const categoryOptions = [];
  for (let i = 0; i < cats.length; i++) {
    categoryOptions.push({ label: cats[i].name, value: cats[i]._id });
  }

  const [selectedCategories, setSelectedCategories] = useState([]);
  //handles ingredients multiselect conent
  const ings = ingredientsStore.ingredients;
  const ingredientOptions = [];
  for (let i = 0; i < ings.length; i++) {
    ingredientOptions.push({ label: ings[i].name, value: ings[i]._id });
  }

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  //handles name
  const handleChange = (event) => {
    setNewRecipe({
      name: event.target.value,
    });
  };

  //handles categories select
  const handleCategories = (current) => {
    let newArray = [];
    newArray = current.map((category) => category.value);
    setNewRecipe({ ...newRecipe, categories: newArray });
  };

  //handles ingredient select
  const handleIngredients = (current) => {
    let newArray = [];
    newArray = current.map((ingredient) => ingredient.value);
    setNewRecipe({ ...newRecipe, ingredients: newArray });
  };
  //handles submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newRecipe);
    recipesStore.createRecipe(newRecipe);
    handleClose();
  };

  return (
    <>
      <Button variant="outline-dark" size="lg" onClick={handleShow}>
        + New Recipe
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Label>Category</Form.Label>
            <MultiSelect
              options={categoryOptions}
              value={selectedCategories}
              onChange={(selectedCategories) => {
                setSelectedCategories(selectedCategories);
                handleCategories(selectedCategories);
              }}
              name="genres"
              labelledBy="Select"
              className="mb-3"
            />
            <Form.Label>Ingredients</Form.Label>
            <MultiSelect
              options={ingredientOptions}
              value={selectedIngredients}
              onChange={(selectedIngredients) => {
                setSelectedIngredients(selectedIngredients);
                handleIngredients(selectedIngredients);
              }}
              name="genres"
              labelledBy="Select"
              className="mb-3"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Generate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default observer(RecipeCreateModal);
