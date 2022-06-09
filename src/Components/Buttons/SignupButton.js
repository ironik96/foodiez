import { useState } from "react";
import { Button } from "react-bootstrap";
import SignupModal from "../modals/SignupModal";

const SignupButton = () => {
  const [modalShow, setModalShow] = useState(false);
  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);
  return (
    <>
      <Button variant="dark" onClick={openModal}>
        Sign up
      </Button>

      <SignupModal {...{ modalShow, closeModal }} />
    </>
  );
};

export default SignupButton;
