import { Modal, Button, Form } from "react-bootstrap";
import authStore from "../../stores/authStore";
import { useState } from "react";

const SignupModal = (props) => {
  const initialUser = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(initialUser);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    props.closeModal();
    setUser(initialUser);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Signup</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="username"
            autoFocus
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignupModal;
