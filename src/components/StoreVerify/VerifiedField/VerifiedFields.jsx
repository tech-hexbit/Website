import React from "react";

import PropTypes from "prop-types";

// css
import VfCss from "./Css/VerifiedFields.module.css";

function VerifiedFields({
  label,
  disable,
  type,
  name,
  showData,
  setData,
  placeholder,
  verifyPin,
}) {
  return (
    <div className={VfCss.inpDiv}>
      <p className={VfCss.inputLabel}>{label}</p>
      <div className={VfCss.inputDivVerified}>
        <input
          disabled={disable.Pincode}
          type={type}
          name={name}
          value={showData[name]}
          id=""
          placeholder={placeholder}
          onChange={(e) => {
            setData({ ...showData, name: e.target.value });
          }}
        />

        {verifyPin ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-badge-check"
            className={VfCss.badgeIcon}
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
const GrpVerifiedFields = ({ disable, showData, setData, verifyPin }) => {
  return (
    <>
      <VerifiedFields
        label="City"
        disable={disable}
        type="text"
        name="City"
        showData={showData}
        setData={setData}
        placeholder="Your City"
        verifyPin={verifyPin}
      />
      <VerifiedFields
        label="State"
        disable={disable}
        type="text"
        name="State"
        showData={showData}
        setData={setData}
        placeholder="Your State"
        verifyPin={verifyPin}
      />
    </>
  );
};
GrpVerifiedFields.propTypes = {
  disable: PropTypes.object.isRequired,
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  verifyPin: PropTypes.bool.isRequired,
};

export default GrpVerifiedFields;
