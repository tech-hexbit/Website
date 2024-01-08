import React, { useState } from "react";

// MicroInteraction
import Load from "../../MicroInteraction/Load";
import { Alert } from "./../../MicroInteraction/Alert";

// css
import FCss from "./Css/Form.module.css";

export default function Form1(props) {
  const [sendotp, setSendotp] = useState(false);
  // const [disable, setDisable] = useState(true);
  const [input, setInput] = useState({ WhatsAppNumber: "", Otp: "" });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  // const sendOTP = async () => {
  //   if (input.WhatsAppNumber == "") {
  //     setDisable(true);
  //     setError("Please enter phone number");
  //   } else {
  //     if (input.WhatsAppNumber.length == 10) {
  //       setError("");
  //       setDisable(false);
  //     } else {
  //       setDisable(true);
  //       setError("Invalid phone no.");
  //     }
  //   }
  // };
  

  const nextFN = async () => {
    if (
      props.input.Phone == "" ||
      input.Otp == "" ||
      props.input.Email == "" ||
      props.input.Password == "" ||
      props.input.BusinessName == "" ||
      props.input.ImporterLicense == "" ||
      props.input.GSTIN == ""
    ) {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });

      window.scrollTo(0, 0);
    } else {
      if (props.input.Phone.length != 10) {
        setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "pets",
          title: "Check it out",
          text: "Invalid phone number",
          val: true,
        });
      } else {
        setError("");
        props.setCount(2);
        window.scrollTo(0, 0);
      }
    }
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      props.setInput({ ...props.input, Phone: inputValue });
      setInput({ ...input, WhatsAppNumber: inputValue });
    }
  };

  const handleOtpChange = (e) => {
    let otpValue = e.target.value;
    otpValue = otpValue.replace(/[^0-9]/g, '');
    otpValue = otpValue.slice(0, 4);
    setInput({ ...input, Otp: otpValue });
  };
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
            {
              input.WhatsAppNumber.length  >= 10  ? (
                <div>
                  <div className={FCss.formInput}>
                  <input
                      type="text"
                      id="phone"
                      placeholder="Enter phone no."
                      name="Phone"
                      value={input.WhatsAppNumber}
                      onInput={handleInputChange}
                    />
                    <div className={FCss.otpButton}>
                      <button onClick={() => setSendotp(!sendotp)}>Send OTP</button>
                      {/* {sendotp === true ? (
                        <button>Verify OTP</button>
                        ) : (
                        )} */}
                    </div>
                  </div>
                  {
                    sendotp  ? (
                    
                      <div>
                        {
                          input.Otp.length >= 4 ? (
                            <div className={FCss.otp}>
                        <div className={FCss.otpText}>
                          {sendotp === true && (
                            <input
                            type="text"  
                            id="otp"
                            placeholder="Enter the OTP sent"
                            name="Password"
                            value={input.Otp}
                            onChange={handleOtpChange}
                          />
                          )}
                      </div>
                      {
                          input.Otp.length >= 4 ? (
                            <div className={FCss.otpButtonVerify}>
                              <button>Verify OTP</button>
                            </div>
                          ):(
                            ""
                          )
                        }
                
                        </div>
                          ):(
                            <div className={FCss.otp}>
                        <div className={FCss.otpTextNumber}>
                          {sendotp === true && (
                            <input
                            type="text"  
                            id="otp"
                            placeholder="Enter the OTP sent"
                            name="Password"
                            value={input.Otp}
                            onChange={handleOtpChange}
                          />
                          )}
                      </div>
                       
                
                        </div>
                          )
                        }
                      </div>
                      ):(
                        ""
                      )
                    }
                  </div>
              ):(
                <div>
                   <div className={FCss.formInputNumber}>
                   <input
                      type="text"
                      id="phone"
                      placeholder="Enter phone no."
                      name="Phone"
                      value={input.WhatsAppNumber}
                      onInput={handleInputChange}
                    />
                    {/* <div className={FCss.otpButton}>
                      {sendotp === true ? (
                        <button>Verify OTP</button>
                      ) : (
                        <button onClick={() => setSendotp(true)}>Send OTP</button>
                      )}
                    </div> */}
                  </div>
                </div>
              )
            }
            
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

      <Alert variant={variants} val={setError} />
    </>
  );
}
