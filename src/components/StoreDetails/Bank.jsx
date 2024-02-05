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

  return (
    <>
      <div className={PrCss.mDiv}>
        <p className={PrCss.AboutYou}>Bank Info</p>

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
      </div>
    </>
  );
}

Bank.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
