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
    </>
  );
};
export default Form1;
