import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// axios
import axios from "axios";

// MicroInteraction
import Load from "../../MicroInteraction/Load";
import LoadingPage from "../../MicroInteraction/Loading";

// state
import AuthContext from "../../store/auth-context";

// css
import style from "./SignInForm.module.css";

export default function OTP(props) {
  const [showOTP, setOTP] = useState(false);
  const [input, setInput] = useState({ phone: "", otp: "" });

  const authCtx = useContext(AuthContext);

  const sendOTP = async () => {
    try {
      const response = await axios.get(
        `/api/website/auth/otp/verification/${input.phone}`
      );

      if (response.data.status) {
        setOTP(!showOTP);
      } else {
        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Unable to Send OTP",
        });
      }
    } catch (e) {
      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Unable to Send OTP",
      });

      console.log(e);
    }
  };

  const VerifyOTP = async () => {
    try {
      let data = {
        phone: input.phone,
        otp: input.otp,
      };

      const response = await axios.post(`/api/website/auth/otp/verify/`, data);

      console.log(response.data);

      // if (response.data.status) {
      //   setOTP(!showOTP);
      // } else {
      //   authCtx.showAlert({
      //     mainColor: "#FDEDED",
      //     secondaryColor: "#F16360",
      //     symbol: "error",
      //     title: "Error",
      //     text: "Unable to Send OTP",
      //
      //   });
      // }
    } catch (e) {
      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Unable to Send OTP",
      });

      console.log(e);
    }
  };

  useEffect(() => {
    if (!props.seeOTP) {
      setInput({
        phone: "",
        otp: "",
      });
    }
  }, [props.seeOTP]);

  useEffect(() => {
    console.table(input);
    console.log("showOTP - " + showOTP);

    if (input.phone.length === 10 && showOTP === false) {
      sendOTP();
    }

    if (input.otp.length === 4 && showOTP === true) {
      VerifyOTP();
    }
  }, [input]);

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
          <>
            {showOTP ? (
              <>
                <label htmlFor="otp">
                  Enter OTP <span className="requiredSpan">*</span>
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
                  <button>
                    <p>Resend OTP</p>
                    <p>00:{time}</p>
                  </button>
                </div>
              </>
            ) : (
              ""
            )}
          </>

          <p className={style.forgotpassword}>
            <Link to="/forgotpassword" className="LinkStyle">
              Forgot Password ?
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
