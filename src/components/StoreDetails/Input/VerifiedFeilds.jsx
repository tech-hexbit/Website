import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// css
import PrCss from "./Css/InputType1.module.css";

export default function VerifiedFeilds({
  Label,
  type,
  field,
  disabled,
  placeholder,
  showData,
  setData,
}) {
  return (
    <div className={PrCss.inpDiv}>
      <p className={PrCss.inputLabel}>{Label}</p>
      <div className={PrCss.inputDivVerified}>
        <input
          type={type}
          disabled={disabled}
          name="days"
          value={showData[field]}
          id={disabled ? `${PrCss.inpTag}` : ""}
          placeholder={placeholder}
          onChange={(e) => {
            setData({ ...showData, [field]: e.target.value });
          }}
        />
        {disabled ? (
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
            className={PrCss.badgeIcon}
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

VerifiedFeilds.propTypes = {
  Label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  showData: PropTypes.object.isRequired,
};
