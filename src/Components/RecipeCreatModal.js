import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import recipesStore from "../stores/recipesStore";

function RecipeCreateModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    categories: [],
    ingredients: [],
  });

  const handleChange = (event) => {
    setNewRecipe({});
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
