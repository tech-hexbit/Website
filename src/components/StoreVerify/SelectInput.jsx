import React from "react";

//css
import SvCss from "../../Pages/Css/StoreVerify.module.css";

const SelectInput = (props) => {
  const handleSelectChangeLocation = (event) => {
    const selectedValue = event.target.value;
    props.setData({
      ...props.showData,
      LocationAvailabilityMode: selectedValue,
    });
  };
  return (
    <div className={SvCss.inpDiv}>
      <div className={SvCss.inputLabel}>LOCATION AVAILABILITY MODE</div>
      <select name="languages" id="lang" onChange={handleSelectChangeLocation}>
        <option value="select">Select Availability</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
};
export default SelectInput;
