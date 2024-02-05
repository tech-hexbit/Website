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
  const [loadPan, setLoadPan] = useState(false);
  const [verifyPin, setVerifyPin] = useState(false);
  const [verifyPan, setVerifyPan] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const verifyGST = async () => {
    setLoad(true);

    if (verifyPin) {
      return;
    }

    try {
      if (showData.Gstin === "") {
        setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "error",
          title: "Check it out",
          text: "Please Fill The Details",
          val: true,
        });

        setLoad(false);

        return;
      }

      let data = {
        GSTIN: showData.Gstin,
      };

      const response = await axios.post("/api/verification/gstin", data);

      if (response.data.success) {
        setVerifyPin(true);

        setLoad(false);
      } else {
        setLoad(false);

        setError({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Invalid GST No.",
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

  const verifyPAN = async () => {
    setLoadPan(true);

    if (verifyPan) {
      return;
    }

    try {
      if (showData.PanNo === "") {
        setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "error",
          title: "Check it out",
          text: "Please Fill The Details",
          val: true,
        });

        setLoadPan(false);

        return;
      }

      let data = {
        pan: showData.PanNo,
        name: showData.FirstName,
      };

      const response = await axios.post("/api/verification/pan", data);

      if (response.data.success) {
        setVerifyPan(true);

        setLoadPan(false);
      } else {
        setLoadPan(false);

        setError({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Invalid PAN No.",
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

      setLoadPan(false);
    }
  };

  return (
    <>
      <div className={PrCss.mDiv}>
        <p className={PrCss.AboutYou}>Documents</p>
        {/* GST */}
        <div className={AdCss.inpDiv}>
          <p className={AdCss.inputLabel}>GSTIN No.</p>
          <div className={AdCss.inputDivPincode}>
            <input
              disabled={verifyPin}
              type="text"
              name="GstinNumber"
              value={showData.Gstin}
              id={verifyPin ? `${AdCss.inpTag}` : ""}
              placeholder="29XXXXXXXXXR1ZR"
              onChange={(e) => {
                setData({ ...showData, Gstin: e.target.value });
              }}
            />
            {showData.Gstin.length >= 15 && (
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
        {/* PAN */}
        <div className={AdCss.inpDiv}>
          <p className={AdCss.inputLabel}>PAN No.</p>
          <div className={AdCss.inputDivPincode}>
            <input
              disabled={verifyPan}
              type="text"
              name="PanNumber"
              value={showData.PanNo}
              id={verifyPan ? `${AdCss.inpTag}` : ""}
              placeholder="29XXXXXXXXXR1ZR"
              onChange={(e) => {
                setData({ ...showData, PanNo: e.target.value });
              }}
            />
            {showData.PanNo.length >= 10 && (
              <div onClick={verifyPAN} className={AdCss.btnVer}>
                {verifyPan ? (
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
                  <>{loadPan ? <Load /> : <>Verify</>}</>
                )}
              </div>
            )}
          </div>
        </div>{" "}
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}

GstPan.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
