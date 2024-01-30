import React from "react";

import PropTypes from "prop-types";

//css
import OfCss from "./Css/OndcField.module.css";

const SelectInput = ({ setData, showData }) => {
  const handleSelectChangeLocation = (event) => {
    const selectedValue = event.target.value;
    setData({
      ...showData,
      LocationAvailabilityMode: selectedValue,
    });
  };

  return (
    <div className={OfCss.inpDiv}>
      <div className={OfCss.inputLabel}>LOCATION AVAILABILITY MODE</div>
      <select name="languages" id="lang" onChange={handleSelectChangeLocation}>
        <option value="select">Select Availability</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
};
SelectInput.propTypes = {
  showData: PropTypes.object,
};
export default SelectInput;
