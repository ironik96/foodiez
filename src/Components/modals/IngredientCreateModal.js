import { useState } from "react";
import { observer } from "mobx-react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import ingredientsStore from "../../stores/ingredientStore";

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
    ingredientsStore.createIngredient(
      newIngredient,
      setShowError,
      setShowSuccess
    );
    handleClose();
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
        <p className="my-2">Successfully added Ingredient</p>
      </Alert>
    );
  } else {
    successMsg = <></>;
  }
  //notification for Errors
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
        <Alert.Heading>Can't Add the ingredient</Alert.Heading>
        <p>It's most likely a duplicate</p>
      </Alert>
    );
  } else {
    errorMsg = <></>;
  }

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
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
      {errorMsg}
      {successMsg}
    </>
  );
}
export default observer(IngredientCreateModal);
