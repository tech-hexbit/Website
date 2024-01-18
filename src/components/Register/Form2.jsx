import React, { useState, useEffect } from "react";

// MicroInteraction
import Load from "./../../MicroInteraction/Load";
import { Alert } from "./../../MicroInteraction/Alert";

// axios
import axios from "axios";

// css
import FCss from "./Css/Form.module.css";

export default function Form2(props) {
  const [load, setLoad] = useState(false);
  const [verifyPin, setVerify] = useState(false);
  const [disable, setDisable] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const pincodeVerify = async () => {
    setLoad(true);

    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${props.input.Pincode}`
      );

      if (response.data[0].PostOffice) {
        setLoad(false);

        props.setInput({
          ...props.input,
          State: response.data[0].PostOffice[0].State,
          City: response.data[0].PostOffice[0].Name,
        });

        setDisable(true);
        setVerify(true);
      } else {
        setLoad(false);

        setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "pets",
          title: "Check it out",
          text: "Invalid pincode",
          val: true,
        });
        setVerify(false);
      }
    } catch (e) {
      console.log(e);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });

      setLoad(false);
    }
  };

  const checkInfo = async () => {
    if (
      props.input.ShopName == "" ||
      props.input.State == "" ||
      props.input.City == "" ||
      props.input.Pincode == "" ||
      props.input.AdditionalInfo == ""
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
    } else if (!verifyPin) {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Invalid pincode",
        val: true,
      });

      window.scrollTo(0, 0);
    } else {
      setError({
        mainColor: "",
        secondaryColor: "",
        symbol: "",
        title: "",
        text: "",
        val: false,
      });

      props.setCount(3);

      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div className={FCss.mainDiv}>
        <div className={FCss.top}>
          <div className={FCss.head}>
            Get your Business <span>Started</span>
          </div>
          <div className={FCss.subHead}>
            Fill in Your Shop Details For Better Connectivity
          </div>
        </div>

        {/* Form */}
        <div className={FCss.form}>
          {/* ShopName */}
          <div className={FCss.formInputs}>
            <label htmlFor="shopBus">Shop Name / Business Name</label>
            <input
              type="text"
              id="shopBus"
              placeholder="Enter the name"
              name="ShopName"
              value={props.input.ShopName}
              onChange={(e) => {
                props.setInput({
                  ...props.input,
                  ShopName: e.target.value,
                });
              }}
            />
          </div>

          {/* Pincode */}
          <div className={FCss.formInputs}>
            <label htmlFor="pincode">Pincode</label>
            {props.input.Pincode.length >= 6 ? (
              <div className={FCss.formInput2}>
                <input
                  disabled={disable}
                  type="number"
                  placeholder="Your pincode"
                  name="Pincode"
                  className={FCss.PinCodeInp}
                  value={props.input.Pincode}
                  id={verifyPin ? FCss.curNA : "pincode"}
                  onChange={(e) => {
                    props.setInput({
                      ...props.input,
                      Pincode: e.target.value,
                    });
                  }}
                />
                <div className={verifyPin ? FCss.otpButtonT : FCss.otpButtonF}>
                  <button
                    className={FCss.otpBtn}
                    onClick={() => {
                      pincodeVerify();
                    }}
                  >
                    {load ? (
                      <Load />
                    ) : (
                      <>
                        {verifyPin ? (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-check"
                            >
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </>
                        ) : (
                          "Verify"
                        )}
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className={FCss.formInputNumber}>
                  <input
                    disabled={disable}
                    type="number"
                    id="pincode"
                    placeholder="Your pincode"
                    name="Pincode"
                    value={props.input.Pincode}
                    onChange={(e) => {
                      props.setInput({
                        ...props.input,
                        Pincode: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Address */}
          <div className={FCss.formInputs}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="Address"
              value={props.input.Address}
              placeholder="Enter your address"
              onChange={(e) => {
                props.setInput({ ...props.input, Address: e.target.value });
              }}
            />
          </div>

          {/* State */}
          <div className={FCss.formInputs}>
            <label htmlFor="state">State / District</label>{" "}
            <div className={FCss.stateInpDiv}>
              <input
                disabled={disable}
                type="text"
                placeholder="Your state"
                name="State"
                className={FCss.stateInp}
                value={props.input.State}
                id={verifyPin ? FCss.curNA : "state"}
                onChange={(e) => {
                  props.setInput({ ...props.input, State: e.target.value });
                }}
              />
              {verifyPin ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-badge-check"
                    className={FCss.verIcon}
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </>
              ) : (
                ""
              )}
            </div>
          </div>

          {/* City */}
          <div className={FCss.formInputs}>
            <label htmlFor="city">City / Village / Town</label>
            <div className={FCss.stateInpDiv}>
              <input
                disabled={disable}
                type="text"
                placeholder="Your city"
                name="City"
                className={FCss.stateInp}
                value={props.input.City}
                id={verifyPin ? FCss.curNA : "city"}
                onChange={(e) => {
                  props.setInput({ ...props.input, City: e.target.value });
                }}
              />
              {verifyPin ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-badge-check"
                    className={FCss.verIcon}
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </>
              ) : (
                ""
              )}
            </div>
          </div>

          {/* AdditionalInfo */}
          <div className={FCss.formInputs}>
            <label htmlFor="contactInfo">Additional Contact Information</label>
            <input
              type="text"
              id="contactInfo"
              placeholder="Additional Contact Information"
              name="AdditionalInfo"
              value={props.input.AdditionalInfo}
              onChange={(e) => {
                props.setInput({
                  ...props.input,
                  AdditionalInfo: e.target.value,
                });
              }}
            />
          </div>
        </div>

        <div className={FCss.button}>
          <div></div>
          <div>
            <button onClick={checkInfo}>
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
