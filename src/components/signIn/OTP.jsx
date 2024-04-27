import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const [time, setTime] = useState(30);
  const [load, setLoad] = useState(false);
  const [showOTP, setOTP] = useState(false);
  const [input, setInput] = useState({ phone: "", otp: "" });

  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  const sendOTP = async () => {
    try {
      const response = await axios.get(
        `/api/website/auth/otp/verification/login/${input.phone}`
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
    setLoad(true);

    try {
      let data = {
        phone: input.phone,
        otp: input.otp,
      };

      const response = await axios.post(
        `/api/website/auth/otp/verify/login`,
        data
      );

      if (response.data.status) {
        setLoad(false);

        if (response.data.user[0].Store[0].StoreID.validation) {
          redirect("/me");
        } else {
          redirect("/me/SetUpStore");
        }
        await authCtx.login(
          response.data.user[0].image,
          response.data.user[0].Email,
          response.data.user[0].Phone,
          response.data.user[0].access,
          response.data.user[0].BusinessName,
          response.data.user[0].ImporterLicense,
          response.data.user[0].GSTIN,
          response.data.user[0].ShopName,
          response.data.user[0].Address,
          response.data.user[0].State,
          response.data.user[0].City,
          response.data.user[0].Pincode,
          response.data.user[0].AdditionalInfo,
          response.data.user[0].category,
          response.data.user[0].accountVerified,
          response.data.user[0].emailVerified,
          response.data.user[0].Store,
          response.data.token,
          10800000
        );
      } else {
        setLoad(false);

        authCtx.showAlert({
          mainColor: "#E5F6FD",
          secondaryColor: "#1AB1F5",
          symbol: "info",
          title: "Information",
          text: "Not a Valid OTP",
        });
      }
    } catch (e) {
      setLoad(false);

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
    if (input.phone.length === 10 && showOTP === false) {
      sendOTP();
    }

    if (input.otp.length === 4 && showOTP === true) {
      VerifyOTP();
    }
  }, [input]);

  useEffect(() => {
    let timer;
    if (showOTP && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      setTime(30);
    }

    // Clean up timer when component unmounts or when showOTP becomes false
    return () => clearInterval(timer);
  }, [showOTP]);

  return (
    <>
      {/* OTP and Phone Number */}
      <div className={style.phoneOTP}>
        {/* Phone Number */}
        <div className={style.inputPO}>
          <label htmlFor="phone">
            Phone <span className="requiredSpan">*</span>
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
              disabled={showOTP}
              placeholder="XXXXX-XXXXX"
              name="phone"
              value={input.phone}
              className={style.phone}
              id={showOTP ? style.phoff : ""}
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
                  <button id={time > 0 ? style.showOTP : ""} onClick={sendOTP}>
                    {load ? (
                      <Load />
                    ) : (
                      <>
                        <p>Resend OTP</p>
                        {time > 0 ? (
                          <p id={style.timer}>
                            00:{time < 10 ? `0${time}` : time}
                          </p>
                        ) : (
                          ""
                        )}
                      </>
                    )}
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
