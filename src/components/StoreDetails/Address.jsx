import React, { useState } from "react";
import PropTypes from "prop-types";

// components
import Map from "./Map";
import InputType1 from "./Input/InputType1";
import VerifiedFeilds from "./Input/VerifiedFeilds";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";
import { Alert } from "./../../MicroInteraction/Alert";

//axios
import axios from "axios";

// css
import AdCss from "./Css/Address.module.css";
import PrCss from "./Css/Particulars.module.css";

export default function Address({ showData, setData }) {
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

  const verifyPincode = async () => {
    setLoad(true);

    if (verifyPin) {
      return;
    }

    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${showData.Pincode}`
      );

      if (response.data[0].PostOffice) {
        setLoad(false);

        setData({
          ...showData,
          State: response.data[0].PostOffice[0].State,
          City: response.data[0].PostOffice[0].Name,
        });

        setVerifyPin(true);
      } else {
        setLoad(false);

        setError({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Pin not found. Kindly try again.",
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
        <p className={PrCss.AboutYou}>Address</p>

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
              <div onClick={verifyPincode} className={AdCss.btnVer}>
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

        {/* Address */}
        <InputType1
          type="text"
          Label="Address"
          showData={showData}
          setData={setData}
          field="Address"
          placeholder="St. - 70, Qt. - 2A"
        />

        {/* City */}
        <VerifiedFeilds
          type="text"
          Label="City"
          disabled={verifyPin}
          showData={showData}
          setData={setData}
          field="City"
          placeholder="Chittranjan"
        />

        {/* State */}
        <VerifiedFeilds
          type="text"
          Label="State"
          disabled={verifyPin}
          showData={showData}
          setData={setData}
          field="State"
          placeholder="West Bengal"
        />

        <Map showData={showData} setData={setData} />
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}

Address.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
