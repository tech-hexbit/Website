import React, { useState, useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// components
import Map from "./Map";
import InputType1 from "./Input/InputType1";
import VerifiedFeilds from "./Input/VerifiedFeilds";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";
import { Alert } from "./../../MicroInteraction/Alert";

// state
import AuthContext from "./../../store/auth-context";

//axios
import axios from "axios";

// css
import AdCss from "./Css/Address.module.css";
import PrCss from "./Css/Particulars.module.css";

export default function Address({ disable, setDisable, showData, setData }) {
  const [load, setLoad] = useState(false);
  const [DropShow, hideDrop] = useState(false);
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

  let menu = useRef();

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

        setDisable({ ...disable, Pincode: true });
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

  const handler = (e) => {
    try {
      if (!menu.current.contains(e.target)) {
        hideDrop(false);
      } else {
        hideDrop(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (DropShow) {
      document.addEventListener("mousedown", handler);
    }
  });

  return (
    <>
      <div className={PrCss.mDiv}>
        <p className={PrCss.AboutYou}>Address</p>

        {/* Pincode */}
        <div className={AdCss.inpDiv}>
          <p className={AdCss.inputLabel}>Pincode</p>
          <div className={AdCss.inputDivPincode}>
            <div ref={menu} className={AdCss.inputDivPincodePar}>
              <input
                disabled={verifyPin}
                type="number"
                name="Pincode"
                value={showData.Pincode}
                id={verifyPin ? `${AdCss.inpTag}` : ""}
                placeholder="Your Pincode"
                onFocus={() => {
                  hideDrop(true);
                }}
                onChange={(e) => {
                  setData({ ...showData, Pincode: e.target.value });
                }}
              />

              <div
                className={AdCss.opsDiv}
                id={DropShow ? "showDropMenuClg" : "hideDropMenuClg"}
                onClick={() => {
                  setData({
                    ...showData,
                    Pincode: authCtx.user.Pincode,
                  });
                  hideDrop(false);
                }}
              >
                {authCtx.user.Pincode}
              </div>
            </div>

            {showData.Pincode.length >= 6 && (
              <div onClick={verifyPincode} className={AdCss.btnVer}>
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

        {/* Building */}
        <InputType1
          type="text"
          Label="Building"
          showData={showData}
          setData={setData}
          field="Building"
          placeholder="Qt. - 2A"
        />

        {/* Street */}
        <InputType1
          type="text"
          Label="Street"
          showData={showData}
          setData={setData}
          field="Address"
          placeholder="St. - 70"
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
  disable: PropTypes.object.isRequired,
  setDisable: PropTypes.func.isRequired,
};
