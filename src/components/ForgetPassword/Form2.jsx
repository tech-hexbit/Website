import React, { useEffect, useState } from "react";

// css
import fpstyle from "./CSS/ForgetPassword.module.css";

const Form2 = ({ onPasswordMatch }) => {
  const [input, setInput] = useState({ newpwd: "", confirmpwd: "" });

  const handlePasswordChange = (e, field) => {
    setInput({ ...input, [field]: e.target.value });
  };

  // Check if passwords match
  const checkPasswordMatch = () => {
    const { newpwd, confirmpwd } = input;

    onPasswordMatch(newpwd === confirmpwd, confirmpwd);
  };

  useEffect(() => {
    console.table(input);
  }, [input]);

  return (
    <>
      <div className={fpstyle.inputEP}>
        <label>Create New Password *</label>
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          id="newpwd"
          name="newpwd"
          value={input.newpwd}
          onChange={(e) => handlePasswordChange(e, "newpwd")}
        />
      </div>

      {/* Confirm Password */}
      <div className={fpstyle.inputPO}>
        <label htmlFor="confirmpassword">
          Confirm New Password
          <span style={{ color: "#350B5E" }}>*</span>
        </label>
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmpwd"
          name="confirmpwd"
          value={input.confirmpwd}
          onChange={(e) => handlePasswordChange(e, "confirmpwd")}
          onBlur={checkPasswordMatch}
        />
      </div>
    </>
  );
};

export default Form2;
