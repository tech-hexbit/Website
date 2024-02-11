import React from "react";

// css
import ItCss from "./Css/InputType1.module.css";

export default function InpTp1({
  Label,
  type,
  field,
  setData,
  showData,
  placeholder,
}) {
  return (
    <div className={ItCss.inpDiv}>
      <p className={ItCss.inputLabel}>{Label}</p>

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
