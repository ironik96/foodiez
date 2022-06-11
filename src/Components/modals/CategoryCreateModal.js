import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
    categoriesStore.createCategory(newCategory);
    handleClose();
  };

  return (
    <>
      <Button variant="lite" onClick={handleShow}>
        + Category
      </Button>

      <Modal show={show} onSubmit={handleSubmit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category Name</Form.Label>
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

export default CategoryCreateModal;
