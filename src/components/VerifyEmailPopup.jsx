import React, { useRef, useEffect } from 'react';
import verifyEmail from '.././assets/SuccessIcon.png';
import '../components/VerifyEmail.css';

const VerifyEmailPopup = ({ onClose }) => {

  return (
    <div className='popup-container show'>
      <div className='popup-content'>
        <img src={verifyEmail} alt="Centered Image" />
        <p>Email sent for Verification!!</p>
        <p>Check Your Mailbox and Verify</p>
        <p>Click on the link in the mail for verification</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default VerifyEmailPopup;
