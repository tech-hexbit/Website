import React from "react";

// css
import RFCss from "./Css/Register.module.css";

export default function RegisterForm() {
  return (
    <div className={RFCss.formmDiv}>
      <div className={RFCss.rowDiv}>
        <input
          type="text"
          name="firstName"
          id=""
          placeholder="First Name"
          className={RFCss.inpTag}
        />
        <input
          type="text"
          name="lastName"
          id=""
          placeholder="Last Name"
          className={RFCss.inpTag}
        />
      </div>
      <input
        type="email"
        name="email"
        id=""
        placeholder="Email"
        className={RFCss.inpTagFull}
      />
      <input
        type="number"
        name="ContactNumber"
        id=""
        placeholder="Contact Number"
        className={RFCss.inpTagFull}
      />
      <input
        type="text"
        name="comapany"
        id=""
        placeholder="Name of the Comapany"
        className={RFCss.inpTagFull}
      />
      <input
        type="text"
        name="nature"
        id=""
        placeholder="Nature of the company"
        className={RFCss.inpTagFull}
      />
      <button className={RFCss.createAccount}>Create Account</button>
    </div>
  );
}
