import React, { useState } from "react";
import PropTypes from "prop-types";

//axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

//css
import PfCss from "./Css/PincodeField.module.css";
import VfCss from "./Css/VerifiedFields.module.css";

export default function PincodeField({
  showData,
  setData,
  verifyPin,
  disable,
  setDisable,
  setVerify,
  setError,
}) {
  const [load, setLoad] = useState(false);

  const pincodeVerify = async () => {
    setLoad(true);

    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${showData.Pincode}`
      );

      if (response.data[0].PostOffice) {
        setData({
          ...showData,
          State: response.data[0].PostOffice[0].State,
          City: response.data[0].PostOffice[0].Name,
        });

        setDisable({ ...disable, Pincode: true });

        setVerify(true);

        setLoad(false);
      } else {
        setLoad(false);

        setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "error",
          title: "Check it out",
          text: "Invalid pincode",
          val: true,
        });

        setVerify(false);
      }
    } catch (e) {
      console.log(e);

      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });
    }
  };

  return (
    <div>
      {showData.Pincode.length >= 6 ? (
        <div className={VfCss.inpDiv}>
          <p className={VfCss.inputLabel}>Pincode</p>
          <div className={PfCss.inputDivPincode}>
            <input
              disabled={disable.Pincode}
              type="number"
              name="Pincode"
              value={showData.Pincode}
              id=""
              placeholder="Your Pincode"
              onChange={(e) => {
                setData({ ...showData, Pincode: e.target.value });
              }}
            />
            <div>
              <button
                className={PfCss.verifyButton}
                onClick={() => {
                  pincodeVerify({
                    setData,
                    showData,
                    disable,
                    setDisable,
                    setVerify,
                    setError,
                  });
                }}
              >
                {verifyPin ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                ) : (
                  <>{load ? <Load /> : "Verify"}</>
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={VfCss.inpDiv}>
          <p className={VfCss.inputLabel}>Pincode</p>
          <div className={PfCss.inputDivPincode}>
            <input
              disabled={disable.Pincode}
              type="number"
              name="Pincode"
              value={showData.Pincode}
              id=""
              placeholder="Your Pincode"
              onChange={(e) => {
                setData({ ...showData, Pincode: e.target.value });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

PincodeField.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  verifyPin: PropTypes.bool.isRequired,
  disable: PropTypes.object.isRequired,
  setDisable: PropTypes.func.isRequired,
  setVerify: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};
