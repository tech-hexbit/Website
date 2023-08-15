import React from "react";

import FCss from "./Css/Form.module.css";

export default function Form2(props) {
  return (
    <div className={FCss.mainDiv}>
      <div className={FCss.top}>
        <div className={FCss.head}>
          Get your Business <span>Started</span>
        </div>
        <div className={FCss.subHead}>
          Fill in Your Shop Details For Better Connectivity
        </div>
      </div>
      <div className={FCss.form}>
        {/* <div className={FCss.phoneInput}>
          <div className={FCss.formInputs}>
            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone" placeholder="Enter phone no." />
          </div>
          <div className={FCss.otp}>
            <div className={FCss.otpText}>
              <input type="text" name="" id="" />
            </div>
            <div className={FCss.otpButton}>
              <button>Send otp</button>
            </div>
          </div>
        </div> */}
        <div className={FCss.formInputs}>
          <label htmlFor="shopBus">Shop Name / Business Name</label>
          <input type="text" id="shopBus" placeholder="Enter the name" />
        </div>
        <div className={FCss.formInputs}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Enter your address" />
        </div>
        <div className={FCss.formInputs}>
          <label htmlFor="state">State / District</label>
          <input type="text" id="state" placeholder="Your state" />
        </div>
        <div className={FCss.formInputs}>
          <label htmlFor="city">City / Village / Town</label>
          <input type="text" id="city" placeholder="Your city" />
        </div>
        <div className={FCss.formInputs}>
          <label htmlFor="pincode">Pincode</label>
          <input type="number" id="pincode" placeholder="Your pincode" />
        </div>
        <div className={FCss.formInputs}>
          <label htmlFor="contactInfo">Additional Contact Information</label>
          <input
            type="text"
            id="contactInfo"
            placeholder="Additional Contact Information"
          />
        </div>
      </div>
      <div className={FCss.button}>
        <div></div>
        <div>
          <button
            onClick={() => {
              props.setCount(2);
            }}
          >
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
  );
}
