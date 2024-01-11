import React, { useState } from "react";
import PropTypes from "prop-types";

// css
import Vcss from "./Css/VerifyEmail.module.css";

// img
import verifyEmail from "./../../../assets/SuccessIcon.png";

export default function VerifyEmail({ onClose }) {
  const [isModalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <>
      {isModalOpen && (
        <div className={Vcss.modalOverlay} onClick={closeModal}>
          <div className={Vcss.modalContent}>
            <div className={Vcss.tick}>
              <img src={verifyEmail} alt="Centered Image" />
            </div>

            <p className={Vcss.para}>Email sent for Verification!!</p>

            <p className={Vcss.l2}>Check Your Mailbox and Verify</p>

            <p className={`${Vcss.para} ${Vcss.l3}`}>
              Click on the link in the mail for verification
            </p>
          </div>
        </div>
      )}
    </>
  );
}

VerifyEmail.propTypes = {
  onClose: PropTypes.func.isRequired,
};
