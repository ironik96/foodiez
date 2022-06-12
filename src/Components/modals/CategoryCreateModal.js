import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Alert from "react-bootstrap/Alert";
import categoriesStore from "../../stores/categoriesStore";

function CategoryCreateModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newCategory, setNewCategory] = useState({ name: "" });

  const handleChange = (event) => {
    setNewCategory({
      name: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    categoriesStore.createCategory(newCategory, setShowError, setShowSuccess);
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
        <p className="my-2">Successfully added Category</p>
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
        <Alert.Heading>Can't Add the Category</Alert.Heading>
        <p>Please try again</p>
      </Alert>
    );
  } else {
    errorMsg = <></>;
  }
  return (
    <>
      <Button variant="lite" onClick={handleShow}>
        + Category
      </Button>

      <Modal show={show} centered onSubmit={handleSubmit} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
          <Button variant="dark" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      {errorMsg}
      {successMsg}
    </>
  );
}

export default CategoryCreateModal;
