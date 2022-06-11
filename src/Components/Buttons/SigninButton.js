import { useState } from "react";
import { Button } from "react-bootstrap";
import SigninModal from "../modals/SigninModal";

const SigninButton = () => {
  const [modalShow, setModalShow] = useState(false);
  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);
  return (
    <>
      <Button variant="lite" onClick={openModal}>
        Sign in
      </Button>

      <SigninModal {...{ modalShow, closeModal }} />
    </>
  );
};

export default SigninButton;
