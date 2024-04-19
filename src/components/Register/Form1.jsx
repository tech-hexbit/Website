import React, { useState, useEffect, useContext } from "react";

// MicroInteraction
import Load from "../../MicroInteraction/Load";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// css
import FCss from "./Css/Form.module.css";
import style from "../signIn/SignInForm.module.css";

export default function Form1(props) {
  const [time, setTime] = useState(30);
  const [load, setLoad] = useState(false);
  const [showOTP, setOTP] = useState(false);
  const [verOTP, setVerOTP] = useState(false);
  const [sendotp, setSendotp] = useState("");

  const authCtx = useContext(AuthContext);

  const nextFN = async () => {
    if (verOTP) {
      if (
        props.input.Phone == "" ||
        input.Otp == "" ||
        props.input.Email == "" ||
        props.input.Password == "" ||
        props.input.BusinessName == "" ||
        props.input.ImporterLicense == "" ||
        props.input.GSTIN == ""
      ) {
        authCtx.showAlert({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "pets",
          title: "Check it out",
          text: "Please Fill All The Details",
        });
      } else {
        if (props.input.Phone.length != 10) {
          authCtx.showAlert({
            mainColor: "#FFC0CB",
            secondaryColor: "#FF69B4",
            symbol: "pets",
            title: "Check it out",
            text: "Invalid phone number",
          });
        } else {
          authCtx.clearAlert();

          props.setCount(2);
        }
      }
    } else {
      authCtx.showAlert({
        mainColor: "#E5F6FD",
        secondaryColor: "#1AB1F5",
        symbol: "info",
        title: "Information",
        text: "Phone Number not verified",
      });
    }
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value;

    inputValue = inputValue.slice(0, 10);

    if (/^[0-9]*$/.test(inputValue)) {
      props.setInput({ ...props.input, Phone: inputValue });
    }
  };

  const handleOtpValue = (e) => {
    let otpValue = e.target.value;

    setSendotp(otpValue);
  };

  const sendOTP = async () => {
    try {
      const response = await axios.get(
        `/api/website/auth/otp/verification/register/${props.input.Phone}`
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
        phone: props.input.Phone,
        otp: sendotp,
      };

      const response = await axios.post(
        `/api/website/auth/otp/verify/register`,
        data
      );

      if (response.data.status) {
        setLoad(false);

        setVerOTP(true);

        authCtx.showAlert({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "OTP Verified",
        });
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
    if (props.input.Phone.length === 10 && showOTP === false) {
      sendOTP();
    }
  }, [props.input]);

  useEffect(() => {
    if (sendotp.length === 4 && showOTP === true && verOTP === false) {
      VerifyOTP();
    }
  }, [sendotp]);

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
      <div className={FCss.mainDiv}>
        <div className={FCss.top}>
          <div className={FCss.head}>
            Welcome to <span>Hexbit</span> !
          </div>
          <div className={FCss.subHead}>
            Create your account and start selling with Hexbit
          </div>
        </div>
        <div className={FCss.form}>
          <div className={FCss.phoneInput}>
            <label htmlFor="phone">Phone</label>
            <>
              <div className={FCss.formInput}>
                <div className={FCss.phoneMDiv}>
                  <div className={FCss.phoneInputmDiv}>
                    <input
                      type="text"
                      placeholder="+91"
                      disabled
                      id={style.countryCode}
                    />
                    <input
                      type="text"
                      placeholder="Enter phone no."
                      name="Phone"
                      value={props.input.Phone}
                      id={showOTP ? style.phoff : ""}
                      onInput={handleInputChange}
                      disabled={showOTP}
                      className={`${style.phone} ${FCss.phoneInput}`}
                    />

                    {verOTP ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-badge-check"
                        className={FCss.verIconPhone}
                      >
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    ) : (
                      ""
                    )}
                  </div>

                  {verOTP ? (
                    <></>
                  ) : (
                    <>
                      {showOTP ? (
                        <button
                          id={time > 0 ? style.showOTP : ""}
                          className={style.resendBtn}
                        >
                          <p>Resend OTP</p>
                          {time > 0 ? (
                            <p id={style.timer}>
                              00:{time < 10 ? `0${time}` : time}
                            </p>
                          ) : (
                            ""
                          )}
                        </button>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                </div>
              </div>

              {verOTP ? (
                ""
              ) : (
                <>
                  {showOTP ? (
                    <>
                      {sendotp.length === 4 ? (
                        <div className={FCss.otp}>
                          <div className={FCss.otpText}>
                            <input
                              type="text"
                              id={FCss.otpInp}
                              placeholder="Enter the OTP sent"
                              name="Password"
                              value={sendotp}
                              onChange={handleOtpValue}
                            />
                          </div>
                          {sendotp.length >= 4 ? (
                            <div
                              className={style.verConBtn}
                              id={style.verBtn}
                              onClick={VerifyOTP}
                            >
                              <p>{load ? <Load /> : <>Verify OTP</>}</p>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      ) : (
                        <div className={FCss.otp}>
                          <div className={FCss.otpTextNumber}>
                            <input
                              type="text"
                              id={FCss.otpInp}
                              placeholder="Enter the OTP sent"
                              name="Password"
                              value={sendotp}
                              onChange={handleOtpValue}
                            />
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </>
              )}
            </>
          </div>

          <div className={FCss.formInputs}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter the email"
              name="Email"
              value={props.input.Email}
              onChange={(e) => {
                props.setInput({ ...props.input, Email: e.target.value });
              }}
            />
          </div>
          <div className={FCss.formInputs}>
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              placeholder="Enter your password"
              name="Password"
              value={props.input.Password}
              onChange={(e) => {
                props.setInput({ ...props.input, Password: e.target.value });
              }}
            />
          </div>
          <div className={FCss.formInputs}>
            <label htmlFor="busName">Business Name</label>
            <input
              type="text"
              id="busName"
              placeholder="Your business name"
              name="BusinessName"
              value={props.input.BusinessName}
              onChange={(e) => {
                props.setInput({
                  ...props.input,
                  BusinessName: e.target.value,
                });
              }}
            />
          </div>
          <div className={FCss.formInputs}>
            <label htmlFor="license">Importer License</label>
            <input
              type="text"
              id="license"
              placeholder="Importer License no."
              name="ImporterLicense"
              value={props.input.ImporterLicense}
              onChange={(e) => {
                props.setInput({
                  ...props.input,
                  ImporterLicense: e.target.value,
                });
              }}
            />
          </div>
          <div className={FCss.formInputs}>
            <label htmlFor="gstin">GSTIN</label>
            <input
              type="text"
              id="gstin"
              placeholder="Your GSTIN"
              name="GSTIN"
              value={props.input.GSTIN}
              onChange={(e) => {
                props.setInput({ ...props.input, GSTIN: e.target.value });
              }}
            />
          </div>
        </div>
        <div className={FCss.button}>
          <div></div>
          <div>
            <button onClick={nextFN}>
              {props.button}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="10"
                viewBox="0 0 21 10"
                fill="none"
              >
                <path
                  d="M1.81791 5.97787L16.9094 5.9877L14.0445 8.32675C13.577 8.71004 13.577 9.32919 14.0445 9.71252C14.512 10.0958 15.2792 10.0958 15.7466 9.71252L20.6493 5.69288C21.1168 5.30958 21.1168 4.69044 20.6493 4.30711L15.7466 0.287469C15.2791 -0.095823 14.5119 -0.095823 14.0445 0.287469C13.577 0.670761 13.577 1.28991 14.0445 1.67324L16.9094 4.02217L1.81791 4.01234C1.15862 4.01234 0.619141 4.45461 0.619141 4.9952C0.619141 5.53578 1.15857 5.97805 1.81791 5.97805V5.97787Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
