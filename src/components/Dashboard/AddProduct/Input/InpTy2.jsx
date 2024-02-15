import React, { useEffect } from "react";
import PropTypes from "prop-types";

// css
import ItCss from "./Css/InputType1.module.css";

export default function InpTy2({
  Label,
  type,
  value,
  field,
  setData,
  showData,
  placeholder,
}) {
  useEffect(() => {
    if (value !== "") {
      setData({
        ...showData,
        [field]: value,
      });

      console.log(field, value);
    }
  }, [value]);
  return (
    <div className={ItCss.inpDiv}>
      <p className={ItCss.inputLabel}>{Label}</p>

      <input
        type={type}
        name={field}
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

InpTy2.propTypes = {
  type: PropTypes.string.isRequired,
  Label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
