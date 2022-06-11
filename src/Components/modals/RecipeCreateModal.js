import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Alert from "react-bootstrap/Alert";
import { MultiSelect } from "react-multi-select-component";

import recipesStore from "../../stores/recipesStore";
import categoriesStore from "../../stores/categoriesStore";
import ingredientsStore from "../../stores/ingredientStore";
import { observer } from "mobx-react";

import authStore from "../../stores/authStore";
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

  const handleName = (event) => {
    setNewRecipe({ ...newRecipe, name: event.target.value });
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

  //handling images
  const [fileImg, setFileImg] = useState({});
  const handleImg = (e) => {
    setFileImg(e.target.files[0]);
  };
  //handles submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", newRecipe.name);
    formData.append("categories", newRecipe.categories);
    formData.append("ingredients", newRecipe.ingredients);
    formData.append("recipeImage", fileImg);
    if (authStore.user) {
      formData.append("user", authStore.user._id);
    }

    recipesStore.createRecipe(formData, setShowError, setShowSuccess);
    clearInputs();
    handleClose();
  };

  // clear input fields, MUST be used after submitting, and could be used along with hiding or closing modal

  const clearInputs = () => {
    setNewRecipe({
      name: "",
      categories: [],
      ingredients: [],
    });
    setFileImg({});
    setSelectedIngredients([]);
    setSelectedCategories([]);
  };

  //notification for Success
  const [showSuccess, setShowSuccess] = useState(false);
  let successMsg;
  if (showSuccess) {
    successMsg = (
      <Alert
        className="m-4 w-25 position-absolute top-25 start-50 translate-middle popup-messages"
        variant="success"
        onClose={() => setShowSuccess(false)}
        dismissible
      >
        <p className="my-2">Successfully added Recipe</p>
      </Alert>
    );
  } else {
    successMsg = <></>;
  }
  //handling Errors
  const [showError, setShowError] = useState(false);
  let errorMsg;
  if (showError) {
    errorMsg = (
      <Alert
        className="m-4 w-25 position-absolute top-25 start-50 translate-middle popup-messages"
        variant="danger"
        onClose={() => setShowError(false)}
        dismissible
      >
        <Alert.Heading>Can't Add the Recipe</Alert.Heading>
        <p>Please try again</p>
      </Alert>
    );
  } else {
    errorMsg = <></>;
  }
  // component
  return (
    <>
      <Button variant="lite" onClick={handleShow}>
        + Recipe
      </Button>

      <Modal show={show} onSubmit={handleSubmit} onHide={handleClose}>
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
                onChange={handleName}
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Image</Form.Label>

              <Form.Control type="file" onChange={handleImg} />
            </Form.Group>

            <Form.Label>Category</Form.Label>
            <MultiSelect
              options={categoryOptions}
              value={selectedCategories}
              onChange={(selectedCategories) => {
                setSelectedCategories(selectedCategories);
                handleCategories(selectedCategories);
              }}
              name="categories"
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
              name="ingredients"
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
      {errorMsg}
      {successMsg}
    </>
  );
}

export default observer(RecipeCreateModal);

/*

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Recipe Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL"
                autoFocus
                onChange={handleImg}
              />
            */
