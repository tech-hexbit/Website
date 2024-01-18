import React, { useEffect, useState } from "react";

//css
import fpstyle from "./CSS/ForgetPassword.module.css";

export default function Form1() {
  const [input, setInput] = useState({ email: "", phone: "", otp: "" });

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
          onChange={(e) => {
            setInput({ ...input, email: e.target.value });
          }}
        />
      </div>

      <h3 className={fpstyle.or}>Or</h3>

      {/* Phone */}
      <div className={fpstyle.inputPO}>
        <label htmlFor="phone">
          Phone <span>*</span>
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
          Enter OTP <span>*</span>
        </label>
        <br />

        <div className={fpstyle.otpInputs}>
          <input
            type="text"
            placeholder="Enter the otp"
            id="otp"
            className={fpstyle.inpF}
          />
          <button>Resend OTP</button>
        </div>
      </div>
    </>
  );
}
