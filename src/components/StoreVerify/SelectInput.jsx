import React from "react";
import SvCss from "../../Pages/Css/StoreVerify.module.css";

const SelectInput = () => {
  return (
    <div className={SvCss.inpDiv}>
      <div className={SvCss.inputLabel}>LOCATION AVAILABILITY MODE</div>
      <select name="languages" id="lang">
        <option value="select">Select Availability</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
};
export default SelectInput;
