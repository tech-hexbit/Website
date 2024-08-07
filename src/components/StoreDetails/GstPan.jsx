import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

//component
import InputType1 from "./Input/InputType1";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

//axios
import axios from "axios";

// store
import AuthContext from "./../../store/auth-context";

// css
import AdCss from "./Css/Address.module.css";
import PrCss from "./Css/Particulars.module.css";

export default function GstPan({ disable, setDisable, showData, setData }) {
  const [load, setLoad] = useState(false);
  const [loadPan, setLoadPan] = useState(false);
  const [verifyPin, setVerifyPin] = useState(false);
  const [verifyPan, setVerifyPan] = useState(false);

  const authCtx = useContext(AuthContext);

  const verifyGST = async () => {
    setLoad(true);

    if (verifyPin) {
      return;
    }

    try {
      if (showData.Gstin === "") {
        authCtx.showAlert({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "error",
          title: "Check it out",
          text: "Please Fill The Details",
        });

        setLoad(false);

        return;
      }

      let data = {
        gstin: showData.Gstin,
      };

      const response = await axios.post(
        "/api/common/verification/gstin",
        data,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setVerifyPin(true);

        setDisable({ ...disable, Gstin: true });

        setLoad(false);
      } else {
        setLoad(false);

        authCtx.showAlert({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Invalid GST No.",
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

  const verifyPAN = async () => {
    setLoadPan(true);

    if (verifyPan) {
      return;
    }

    try {
      if (showData.PanNo === "") {
        authCtx.showAlert({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "error",
          title: "Check it out",
          text: "Please Fill The Details",
        });

        setLoadPan(false);

        return;
      }

      let data = {
        pan: showData.PanNo,
        name: showData.FirstName,
      };

      const response = await axios.post("/api/common/verification/pan", data, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setVerifyPan(true);

        setDisable({ ...disable, Pan: true });

        setLoadPan(false);
      } else {
        setLoadPan(false);

        authCtx.showAlert({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Invalid PAN No.",
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
                  <button className={AdCss.verifyButton}>
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
                  </button>
                ) : (
                  <>
                    {load ? (
                      <Load />
                    ) : (
                      <button className={AdCss.verifyButton}>Verify</button>
                    )}
                  </>
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
              placeholder="AMJXXXXX1N"
              onChange={(e) => {
                setData({ ...showData, PanNo: e.target.value });
              }}
            />
            {showData.PanNo.length >= 10 && (
              <div onClick={verifyPAN} className={AdCss.btnVer}>
                {verifyPan ? (
                  <button className={AdCss.verifyButton}>
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
                  </button>
                ) : (
                  <>
                    {loadPan ? (
                      <Load />
                    ) : (
                      <button className={AdCss.verifyButton}>Verify</button>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* FSSAI */}
        {authCtx.user.category.find(
          (val) => val.name === "Food & Beverage" || val.name === "Grocery"
        ) && (
          <InputType1
            type="text"
            Label="FSSAI Licence NO"
            showData={showData}
            setData={setData}
            field="FssaiLicence"
            placeholder="10022XXX000000"
          />
        )}
      </div>
    </>
  );
}

GstPan.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  disable: PropTypes.object.isRequired,
  setDisable: PropTypes.func.isRequired,
};
