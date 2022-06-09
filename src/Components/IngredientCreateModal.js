import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ingredientsStore from "../stores/ingredientStore";

function IngredientCreateModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newIngredient, setNewIngredient] = useState({ name: "" });

  const handleChange = (event) => {
    setNewIngredient({
      name: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ingredientsStore.createIngredient(newIngredient);
    handleClose();
  };

  return (
    <>
      <Button variant="outline-dark" size="lg" onClick={handleShow}>
        + New Ingredient
      </Button>

      <Modal show={show} onSubmit={handleSubmit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingredient Name</Form.Label>
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

export default IngredientCreateModal;
