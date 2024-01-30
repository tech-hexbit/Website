import React from "react";

import PropTypes from "prop-types";

//axios
import axios from "axios";

//css
import VfCss from "./Css/VerifiedFields.module.css";
import PfCss from "./Css/PincodeField.module.css";

const GstinVerify = async ({
  setData,
  showData,
  disable,
  setDisable,
  setError,
}) => {
  try {
    const validGstin = ({ response }) => {
      setData({
        ...showData,
        Gstin: response.data.response.GSTIN,
      });
      setDisable({ ...disable, Gstin: true });
    };
    const invalidGstin = () => {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "error",
        title: "Check it out",
        text: "Invalid Gstin No",
        val: true,
      });
    };
    const GstinDetails = {
      GSTIN: showData.Gstin,
    };
    const response = await axios.post("/api/verification/gstin", GstinDetails);

    response.data.success ? validGstin({ response }) : invalidGstin();
  } catch (e) {
    // console.log(e);
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
const PanVerify = async ({
  setData,
  showData,
  disable,
  setDisable,
  setError,
}) => {
  try {
    const validPan = ({ response }) => {
      setData({
        ...showData,
        PanNo: response.data.response.pan,
      });
      setDisable({ ...disable, Pan: true });
      // console.log(disable);
    };
    const invalidPan = () => {
      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "error",
        title: "Check it out",
        text: "Invalid Pan No",
        val: true,
      });
    };
    const panDetails = {
      pan: showData.PanNo,
      name: showData.FirstName,
    };
    const response = await axios.post("/api/verification/pan", panDetails);
    // console.log(response.data);

    response.data.success ? validPan({ response }) : invalidPan();
  } catch (e) {
    console.log(e);
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

const VerifiedGstin = ({
  showData,
  setData,
  disable,
  setDisable,
  setError,
}) => {
  return (
    <div>
      {showData.Gstin.length >= 15 ? (
        <div className={VfCss.inpDiv}>
          <p className={VfCss.inputLabel}>GSTIN NO.</p>
          <div className={PfCss.inputDivPincode}>
            <input
              disabled={disable.Gstin}
              type="text"
              name="GstinNumber"
              value={showData.Gstin}
              id=""
              placeholder="Enter GST Number"
              onChange={(e) => {
                setData({ ...showData, Gstin: e.target.value });
              }}
            />
            <div>
              <button
                className={PfCss.verifyButton}
                onClick={() => {
                  GstinVerify({
                    setData,
                    showData,
                    disable,
                    setDisable,
                    setError,
                  });
                }}
              >
                {disable.Gstin ? (
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
                  "Verify"
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={VfCss.inpDiv}>
          <p className={VfCss.inputLabel}>GSTIN NO.</p>
          <div className={PfCss.inputDivPincode}>
            <input
              disabled={disable.Gstin}
              type="text"
              name="GstinNumber"
              value={showData.Gstin}
              id=""
              placeholder="Enter GST Number"
              onChange={(e) => {
                setData({ ...showData, Gstin: e.target.value });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
const VerifiedPan = ({ showData, setData, disable, setDisable, setError }) => {
  return (
    <div>
      {showData.PanNo.length >= 10 ? (
        <div className={VfCss.inpDiv}>
          <p className={VfCss.inputLabel}>PAN NO.</p>
          <div className={PfCss.inputDivPincode}>
            <input
              disabled={disable.Pan}
              type="text"
              name="PanNumber"
              value={showData.PanNo}
              id=""
              placeholder="10-digit PAN Number"
              onChange={(e) => {
                setData({ ...showData, PanNo: e.target.value });
              }}
            />
            <div>
              <button
                className={PfCss.verifyButton}
                onClick={() => {
                  PanVerify({
                    setData,
                    showData,
                    disable,
                    setDisable,
                    setError,
                  });
                }}
              >
                {disable.Pan ? (
                  <svg
                    // className={SvCss.badgeIcon}
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
                  "Verify"
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={VfCss.inpDiv}>
          <p className={VfCss.inputLabel}>PAN NO.</p>
          <div className={PfCss.inputDivPincode}>
            <input
              disabled={disable.Pan}
              type="text"
              name="PanNumber"
              value={showData.PanNo}
              id=""
              placeholder="10-digit PAN Number"
              onChange={(e) => {
                setData({ ...showData, PanNo: e.target.value });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
const VerifiedPanGst = ({
  showData,
  setData,
  disable,
  setDisable,
  setError,
}) => {
  return (
    <>
      <VerifiedGstin
        showData={showData}
        setData={setData}
        disable={disable}
        setDisable={setDisable}
        setError={setError}
      />
      <VerifiedPan
        showData={showData}
        setData={setData}
        disable={disable}
        setDisable={setDisable}
        setError={setError}
      />
    </>
  );
};
VerifiedPanGst.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  disable: PropTypes.object.isRequired,
  setDisable: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};
export default VerifiedPanGst;
