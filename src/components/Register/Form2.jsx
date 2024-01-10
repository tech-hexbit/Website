import React, { useState, useEffect } from "react";

// MicroInteraction
import Load from "./../../MicroInteraction/Load";
import { Alert } from "./../../MicroInteraction/Alert";

// css
import FCss from "./Css/Form.module.css";
import axios from "axios";

export default function Form2(props) {
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
    try {
      const validPin = ({ response }) => {
        // console.log(response.data[0].PostOffice[0].State);
        props.setInput({
          ...props.input,
          State: response.data[0].PostOffice[0].State,
          City: response.data[0].PostOffice[0].Name,
        });
        setDisable(true);
        setVerify(true);
      };
      const invalidPin = () => {
        setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "pets",
          title: "Check it out",
          text: "Invalid pincode",
          val: true,
        });
        setVerify(false);
      };
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${props.input.Pincode}`
      );
      // console.log(response.data);
      response.data[0].PostOffice ? validPin({ response }) : invalidPin();
      // console.log("invalid pincode");
      console.log(props.input.State);
    } catch (e) {
      console.log(e);
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
          {props.input.Pincode.length >= 6 ? (
            <div>
              <div className={FCss.formInputs}>
                <label htmlFor="pincode">Pincode</label>
                <input
                  disabled={disable}
                  type="number"
                  id="pincode"
                  placeholder="Your pincode"
                  name="Pincode"
                  value={props.input.Pincode}
                  onChange={(e) => {
                    props.setInput({ ...props.input, Pincode: e.target.value });
                    const pin = props.input.Pincode;
                    console.log(pin);
                  }}
                />
                <div className={FCss.otpButtonClicked}>
                  <button
                    onClick={() => {
                      console.log(`verify button clicked`);
                      // setSendotp(!sendotp);
                      pincodeVerify();
                    }}
                  >
                    Verify Pincode
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className={FCss.formInputs}>
              <label htmlFor="pincode">Pincode</label>
              <input
                disabled={disable}
                type="number"
                id="pincode"
                placeholder="Your pincode"
                name="Pincode"
                value={props.input.Pincode}
                onChange={(e) => {
                  props.setInput({ ...props.input, Pincode: e.target.value });
                  const pin = props.input.Pincode;
                  console.log(pin);
                }}
              />
            </div>
          )}

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
            <label htmlFor="state">State / District</label>
            <input
              disabled={disable}
              type="text"
              id="state"
              placeholder="Your state"
              name="State"
              value={props.input.State}
              onChange={(e) => {
                props.setInput({ ...props.input, State: e.target.value });
              }}
            />
          </div>

          {/* City */}
          <div className={FCss.formInputs}>
            <label htmlFor="city">City / Village / Town</label>
            <input
              disabled={disable}
              type="text"
              id="city"
              placeholder="Your city"
              name="City"
              value={props.input.City}
              onChange={(e) => {
                props.setInput({ ...props.input, City: e.target.value });
              }}
            />
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
