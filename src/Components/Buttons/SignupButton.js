import React, { useState } from "react";
import SignupModal from "../modals/SignupModal";

const SignupButton = () => {
  const [modalShow, setModalShow] = useState(false);
  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);
  return (
    <>
      <button className="btn action-btn" onClick={openModal}>
        <p>Signup</p>
      </button>

      <SignupModal show={modalShow} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;
