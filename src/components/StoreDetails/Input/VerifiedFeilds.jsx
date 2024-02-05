import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// css
import PrCss from "./Css/InputType1.module.css";
import VrCss from "./Css/VerifiedFeilds.module.css";

export default function VerifiedFeilds({
  Label,
  type,
  field,
  placeholder,
  showData,
  setData,
}) {
  return (
    <div className={PrCss.inpDiv}>
      <p className={PrCss.inputLabel}>{Label}</p>
      <input
        type={type}
        name="days"
        value={showData[field]}
        id=""
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
