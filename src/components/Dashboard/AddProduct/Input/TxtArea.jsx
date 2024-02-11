import React from "react";
import PropTypes from "prop-types";

// css
import ItCss from "./Css/InputType1.module.css";

export default function TxtArea({
  Label,
  //   type,
  field,
  setData,
  showData,
  placeholder,
}) {
  return (
    <div className={ItCss.inpDiv}>
      <p className={ItCss.inputLabel}>{Label}</p>

      <textarea
        name="days"
        id=""
        cols="30"
        rows="10"
        value={showData[field]}
        placeholder={placeholder}
        onChange={(e) => {
          setData({ ...showData, [field]: e.target.value });
        }}
      ></textarea>

      {/* <input
        type={type}
        name="days"
        value={showData[field]}
        id=""
        placeholder={placeholder}
        onChange={(e) => {
          setData({ ...showData, [field]: e.target.value });
        }}
      /> */}
    </div>
  );
}

TxtArea.propTypes = {
  //   type: PropTypes.string.isRequired,
  Label: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
