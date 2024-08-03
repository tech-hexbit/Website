import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

// components
import VerifiedFeilds from "./Input/VerifiedFeilds";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

//axios
import axios from "axios";

// store
import AuthContext from "./../../store/auth-context";

// css
import PrCss from "./Css/Particulars.module.css";

export default function Bank({ disable, setDisable, showData, setData }) {
  const [load, setLoad] = useState(false);
  const [verifyPin, setVerifyPin] = useState(false);

  const authCtx = useContext(AuthContext);

  const bankVerify = async () => {
    setLoad(true);

    if (verifyPin) {
      setLoad(false);

      return;
    }

    try {
      if (showData.AccountNo === 0 || showData.IfscCode === "") {
        authCtx.showAlert({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "error",
          title: "Check it out",
          text: "Please Fill All The Details",
        });

        setLoad(false);

        return;
      }

      let data = {
        bankAccount: showData.AccountNo,
        ifsc: showData.IfscCode,
      };

      const response = await axios.post("/api/common/verification/bank", data, {
        headers: { Authorization: `${authCtx.token}` },
      });

      console.log(response.data);

      if (response.data.success) {
        setData({
          ...showData,
          AcHolderName: response.data.response.data.nameAtBank,
          BankName: response.data.response.data.bankName,
          BranchName: response.data.response.data.branch,
        });

        setVerifyPin(true);

        setDisable({ ...disable, Bank: true });

        setLoad(false);
      } else {
        setLoad(false);

        authCtx.showAlert({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Invalid Bank Info",
        });
      }
    } catch (error) {
      console.log(error);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
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
          <button onClick={bankVerify}>{load ? <Load /> : "Verify"}</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

Bank.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  disable: PropTypes.object.isRequired,
  setDisable: PropTypes.func.isRequired,
};
