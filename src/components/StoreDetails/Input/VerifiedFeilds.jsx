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
