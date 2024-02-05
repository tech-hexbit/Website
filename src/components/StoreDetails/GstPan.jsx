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
import AdCss from "./Css/Address.module.css";
import PrCss from "./Css/Particulars.module.css";

export default function GstPan({ showData, setData }) {
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

  const verifyGST = async () => {};

  return (
    <div className={PrCss.mDiv}>
      <p className={PrCss.AboutYou}>Documents</p>

      {/* Pincode */}
      <div className={AdCss.inpDiv}>
        <p className={AdCss.inputLabel}>Pincode</p>
        <div className={AdCss.inputDivPincode}>
          <input
            disabled={verifyPin}
            type="number"
            name="Pincode"
            value={showData.Pincode}
            id={verifyPin ? `${AdCss.inpTag}` : ""}
            placeholder="Your Pincode"
            onChange={(e) => {
              setData({ ...showData, Pincode: e.target.value });
            }}
          />
          {showData.Pincode.length >= 6 && (
            <div onClick={verifyGST} className={AdCss.btnVer}>
              {verifyPin ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-badge-check"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </>
              ) : (
                <>{load ? <Load /> : <>Verify</>}</>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

GstPan.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
