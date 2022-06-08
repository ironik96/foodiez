import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import recipesStore from "../stores/recipesStore";
import { MultiSelect } from "react-multi-select-component";
import categoriesStore from "../stores/categoriesStore";
function RecipeCreateModal() {
  const [show, setShow] = useState(false);

  const [selected, setSelected] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    categories: [],
    ingredients: [],
  });

  const cats = categoriesStore.categories;
  const catOptions = [];
  for (let i = 0; i < cats.length; i++) {
    catOptions.push({ label: cats[i].name, value: cats[i].name });
  }

  const handleChange = (event) => {
    setNewRecipe({});
  };
  const handleGenres = (current) => {
    let newArray = [];
    if (current.length === 0) {
      newArray = ["Fantasy"];
    } else {
      newArray = current.map((genre) => genre.value);
    }
    setNewRecipe({ ...newRecipe, genres: newArray });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
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
            <MultiSelect
              options={catOptions}
              value={selected}
              onChange={(selected) => {
                setSelected(selected);
                handleGenres(selected);
              }}
              name="genres"
              labelledBy="Select"
              className="genresmenu"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RecipeCreateModal;
