import React, { useState } from "react";
import fpstyle from "./CSS/ForgetPassword.module.css";

const Form1 = ({ onValidateEmail }) => {
  const [input, setInput] = useState({ email: "", phone: "", otp: "" });

  const handleEmailChange = (e) => {
    setInput({ ...input, email: e.target.value });
  };
  //validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div className={fpstyle.inputEP}>
        <label>Email address *</label>
        <br />
        <input
          type="email"
          placeholder="Email address"
          id="email"
          name="email"
          value={input.email}
          onChange={handleEmailChange}
          onBlur={() => onValidateEmail(input.email)}
        />
      </div>

      <h3 className={fpstyle.or}>Or</h3>

      {/* Phone */}
      <div className={fpstyle.inputPO}>
        <label htmlFor="phone">
          Phone<span style={{ color: "#350B5E" }}>*</span>
        </label>
        <br />
        <div className={fpstyle.phoneInputs}>
          <input
            type="text"
            placeholder="+91"
            disabled
            id={fpstyle.countryCode}
          />
          <input
            type="number"
            placeholder="XXXXX-XXXXX"
            id="phone"
            className={fpstyle.phone}
          />
        </div>
      </div>

      {/* OTP */}
      <div className={fpstyle.inputPO}>
        <label htmlFor="otp">
          Enter OTP<span style={{ color: "#350B5E" }}>*</span>
        </label>
        <br />
        <div className={fpstyle.otpInputs}>
          <input type="text" placeholder="Enter the otp" id="otp" />
          <button>Resend OTP</button>
        </div>
      </div>
    </>
  );
};
export default Form1;
