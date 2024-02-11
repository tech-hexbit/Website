import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// css
import PrCss from "./Css/InputType1.module.css";

export default function InputType1({
  Label,
  type,
  field,
  setData,
  showData,
  placeholder,
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

InputType1.propTypes = {
  Label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  showData: PropTypes.object.isRequired,
};
