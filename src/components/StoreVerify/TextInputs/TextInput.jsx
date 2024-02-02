import React from "react";

import PropTypes from "prop-types";

// css
import TiCss from "./Css/TextInput.module.css";

const TextInput = ({ Label, type, field, placeholder, showData, setData }) => {
  return (
    <div className={TiCss.inpDiv}>
      <p className={TiCss.inputLabel}>{Label}</p>
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
};

TextInput.propTypes = {
  Label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
export default TextInput;
