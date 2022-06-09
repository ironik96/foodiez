import { Modal, Button, Form, InputGroup, ModalBody } from "react-bootstrap";
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
      onSubmit={handleSubmit}
      show={modalShow}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={closeModal}
    >
      <Form onSubmit={handleSubmit}>
        <ModalBody>
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
        </ModalBody>
        <Modal.Footer>
          <Button
            variant="dark"
            type="submit"
            value="Submit"
            onClick={handleSubmit}
          >
            Sign up
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default SignupModal;
