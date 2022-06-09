import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import authStore from "../../stores/authStore";
import { useState } from "react";

const SignupModal = ({ modalShow, closeModal }) => {
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
    closeModal();
    setUser(initialUser);
  };
  return (
    <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={closeModal}
    >
      <Form className="sign-modal" onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroup.Text>Username</InputGroup.Text>
          <Form.Control
            type="text"
            name="username"
            autoFocus
            onChange={handleChange}
          />
        </InputGroup>
        <br />

        <InputGroup>
          <InputGroup.Text>Password</InputGroup.Text>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChange}
          />
        </InputGroup>
      </Form>
      <Modal.Footer>
        <Button variant="dark" onClick={handleSubmit}>
          Sign up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignupModal;
