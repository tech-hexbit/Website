import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

// components
import VerifiedFeilds from "./Input/VerifiedFeilds";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";
import { Alert } from "./../../MicroInteraction/Alert";

//axios
import axios from "axios";

// store
import AuthContext from "./../../store/auth-context";

// css
import PrCss from "./Css/Particulars.module.css";

export default function Bank({ showData, setData }) {
  const [load, setLoad] = useState(false);
  const [verifyPin, setVerifyPin] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const bankVerify = async () => {
    setLoad(true);

    if (verifyPin) {
      setLoad(false);

      return;
    }

    try {
      if (showData.AccountNo === 0 || showData.IfscCode === "") {
        setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "error",
          title: "Check it out",
          text: "Please Fill All The Details",
          val: true,
        });

        setLoad(false);

        return;
      }

      let data = {
        bankAccount: showData.AccountNo,
        ifsc: showData.IfscCode,
      };

      const response = await axios.post("/api/verification/bank", data);

      if (response.data.success) {
        setData({
          ...showData,
          AcHolderName: response.data.response.data.nameAtBank,
          BankName: response.data.response.data.bankName,
          BranchName: response.data.response.data.branch,
        });

        setVerifyPin(true);

        setLoad(false);
      } else {
        setLoad(false);

        setError({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Invalid Bank Info",
          val: true,
        });
      }
    } catch (error) {
      console.log(error);

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

  return (
    <>
      <div className={PrCss.mDiv}>
        <p className={PrCss.AboutYou}>Bank Info</p>

        {/* Account Number */}
        <VerifiedFeilds
          type="number"
          Label="Account Number"
          disabled={verifyPin}
          showData={showData}
          setData={setData}
          field="AccountNo"
          placeholder="2456XXXXXXX1416"
        />

        {/* IFSC CODE */}
        <VerifiedFeilds
          type="text"
          Label="IFSC CODE"
          disabled={verifyPin}
          showData={showData}
          setData={setData}
          field="IfscCode"
          placeholder="SCBLXXXXX18"
        />

        {/* Account Holder Name */}
        <VerifiedFeilds
          type="text"
          Label="Account Holder Name"
          disabled={verifyPin}
          showData={showData}
          setData={setData}
          field="AcHolderName"
          placeholder="Jhon James David"
        />

        {/* Bank Name */}
        <VerifiedFeilds
          type="text"
          Label="Bank Name"
          disabled={verifyPin}
          showData={showData}
          setData={setData}
          field="BankName"
          placeholder="State Bank of India"
        />

        {/* Branch Name */}
        <VerifiedFeilds
          type="text"
          Label="Branch Name"
          disabled={verifyPin}
          showData={showData}
          setData={setData}
          field="BranchName"
          placeholder="Mihijam Bazar"
        />

        {!verifyPin && showData.AccountNo !== "" && showData.IfscCode !== "" ? (
          <div onClick={bankVerify}>{load ? <Load /> : "Verify"}</div>
        ) : (
          ""
        )}
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}

Bank.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
