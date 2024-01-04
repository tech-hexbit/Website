import React, { useContext, useState, useEffect } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "./../store/auth-context";

// MicroInteraction
import Load from "./../MicroInteraction/Load";
import { Alert } from "./../MicroInteraction/Alert";

// css
import SvCss from "./Css/StoreVerify.module.css";

export default function StoreVerify() {
  const [showData, setData] = useState({
    AccountHolderName: "",
    AccountNumber: "",
    BankName: "",
    City: "",
    Branch: "",
    IfscCode: "",
  });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  return (
    <>
      <div className={SvCss.mDiv}>
        <p className={SvCss.CreateYourStore}>Create Your Store</p>

        <div>
          <div className={SvCss.InpDiv}>
            <p>Account Holder Name</p>
            <input
              type="text"
              name="AccountHolderName"
              value={showData.AccountHolderName}
              id=""
              placeholder="Chandler Muriel Bing"
              onChange={(e) => {
                setData({ ...showData, AccountHolderName: e.target.value });
              }}
            />
          </div>

          <div className={SvCss.InpDiv}>
            <p>Account Number</p>
            <input
              type="number"
              name="AccountNumber"
              value={showData.AccountNumber}
              id=""
              placeholder="2134XXXXXX1416"
              onChange={(e) => {
                setData({ ...showData, AccountNumber: e.target.value });
              }}
            />
          </div>

          <div className={SvCss.InpDiv}>
            <p>Bank Name</p>
            <input
              type="text"
              name="BankName"
              value={showData.BankName}
              id=""
              placeholder="State Bank of India"
              onChange={(e) => {
                setData({ ...showData, BankName: e.target.value });
              }}
            />
          </div>

          <div className={SvCss.InpDiv}>
            <p>Branch</p>
            <input
              type="text"
              name="Branch"
              value={showData.Branch}
              id=""
              placeholder="Jamtara Bazar"
              onChange={(e) => {
                setData({ ...showData, Branch: e.target.value });
              }}
            />
          </div>

          <div className={SvCss.InpDiv}>
            <p>IFSC Code</p>
            <input
              type="text"
              name="IfscCode"
              value={showData.IfscCode}
              id=""
              placeholder="SBINXXXXXX5"
              onChange={(e) => {
                setData({ ...showData, IfscCode: e.target.value });
              }}
            />
          </div>

          <div className={SvCss.InpDiv}>
            <p>City</p>
            <input
              type="text"
              name="City"
              value={showData.City}
              id=""
              placeholder="Jamtara"
              onChange={(e) => {
                setData({ ...showData, City: e.target.value });
              }}
            />
          </div>
        </div>

        <button className={SvCss.SubmitBtn}>Submit</button>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
