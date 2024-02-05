import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// css
import AdCss from "./Css/Address.module.css";
import PrCss from "./Css/Particulars.module.css";

export default function Address({ showData, setData }) {
  const verifyPincode = () => {
    console.log("verifyPincode");
  };
  return (
    <div className={PrCss.mDiv}>
      <p className={PrCss.AboutYou}>Address</p>
      <div className={AdCss.inpDiv}>
        <p className={AdCss.inputLabel}>Pincode</p>
        <div className={AdCss.inputDivPincode}>
          <input
            // disabled={disable.Pincode}
            type="number"
            name="Pincode"
            value={showData.Pincode}
            id=""
            placeholder="Your Pincode"
            onChange={(e) => {
              setData({ ...showData, Pincode: e.target.value });
            }}
          />
          {showData.Pincode.length >= 6 && (
            <div onClick={verifyPincode}>Verify</div>
          )}
        </div>
      </div>
    </div>
  );
}

Address.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
