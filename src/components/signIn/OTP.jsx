import React, { useContext, useState, useEffect } from "react";

// axios
import axios from "axios";

// MicroInteraction
import Load from "../../MicroInteraction/Load";
import { Alert } from "./../../MicroInteraction/Alert";
import LoadingPage from "../../MicroInteraction/Loading";

// state
import AuthContext from "../../store/auth-context";

// css
import style from "./SignInForm.module.css";

export default function OTP(props) {
  const [input, setInput] = useState({ phone: "", otp: "" });

  useEffect(() => {
    console.table(input);
  }, [input]);

  useEffect(() => {
    if (!props.seeOTP) {
      setInput({
        phone: "",
        otp: "",
      });
    }
  }, [props.seeOTP]);
  return (
    <>
      {/* OTP and Phone Number */}
      <div className={style.phoneOTP}>
        <div className={style.inputPO}>
          <label htmlFor="phone">
            Phone<span className="requiredSpan">*</span>
          </label>
          <br />
          <div className={style.phoneInputs}>
            <input
              type="text"
              placeholder="+91"
              disabled
              id={style.countryCode}
            />
            <input
              type="number"
              placeholder="XXXXX-XXXXX"
              id="phone"
              name="phone"
              value={input.phone}
              className={style.phone}
              onChange={(e) => {
                setInput({ ...input, phone: e.target.value });
              }}
              onClick={() => {
                props.hideOTP(true);
              }}
            />
          </div>
        </div>
        <div className={style.inputPO}>
          <label htmlFor="otp">
            Enter OTP<span className="requiredSpan">*</span>
          </label>
          <br />
          <div className={style.otpInputs}>
            <input
              type="text"
              placeholder="Enter the otp"
              id="otp"
              name="otp"
              value={input.otp}
              onChange={(e) => {
                setInput({ ...input, otp: e.target.value });
              }}
              onClick={() => {
                props.hideOTP(true);
              }}
            />
            <button>Resend OTP</button>
          </div>
        </div>
      </div>
    </>
  );
}
