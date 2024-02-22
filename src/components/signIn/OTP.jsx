import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
  const [load, setLoad] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const handleSendOtpButton = async() => {
    setLoad(true);

    try {
      const response = await axios.post("/api/App/onborading/send_otp",input, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setLoad(false);

       
      } else {
        setLoad(false);

        
      }
    } catch (error) {
      console.log(error);

      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Unable to send otp",
        val: true,
      });
    }
  }
  

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
        {/* Phone Number */}
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

        {/* OTP */}
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
            <button onClick={handleSendOtpButton} > {load ? <Load /> : "Resend OTP"}</button>
          </div>

          <p className={style.forgotpassword}>
            <Link to="/forgotpassword" className="LinkStyle">
              Forgot Password ?
            </Link>
          </p>
        </div>
      </div>
      
      <Alert variant={variants} val={setError} />
    </>
  );
}
