import React, { useState } from "react";
import SigninModal from "../modals/SigninModal";

const SigninButton = () => {
  const [modalShow, setModalShow] = useState(false);
  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);
  return (
    <>
      <button className="btn" onClick={openModal}>
        <p>Signin</p>
      </button>

      <SigninModal show={modalShow} closeModal={closeModal} />
    </>
  );
};

export default SigninButton;
