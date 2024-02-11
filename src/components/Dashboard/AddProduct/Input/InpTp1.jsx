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
      <p className={PrCss.inputLabel}>{Label}</p>

      <input type={type} value={showData[field]} placeholder={placeholder} />
    </div>
  );
}
