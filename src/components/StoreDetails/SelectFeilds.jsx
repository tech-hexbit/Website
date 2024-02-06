import React, { useState } from "react";
import PropTypes from "prop-types";

//css
import OfCss from "./Css/OndcField.module.css";

export default function SelectFeilds({ showData, setData }) {
  const handleSelectChangeReturn = (event) => {
    const selectedValue = event.target.value;
    setData({
      ...showData,
      Returnable: selectedValue,
    });
  };

  const handleSelectChangeCancel = (event) => {
    const selectedValue = event.target.value;
    setData({
      ...showData,
      Cancellable: selectedValue,
    });
  };

  return (
    <>
      {/* Time to ship */}
      <div className={OfCss.inpDiv}>
        <div className={OfCss.inputLabel}>Time to ship</div>
        <select name="languages" id="lang">
          <option disabled hidden selected>
            Choose option
          </option>
          <option value="P1D">1 Days</option>
          <option value="P4D">4 Days</option>
          <option value="P7D">7 Days</option>
        </select>
      </div>

      {/* Cancellable */}
      <div className={OfCss.inpDiv}>
        <div className={OfCss.inputLabel}>Cancellable</div>
        <select name="languages" id="lang" onChange={handleSelectChangeCancel}>
          <option disabled hidden selected>
            Choose option
          </option>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      </div>

      {/* Returnable */}
      <div className={OfCss.inpDiv}>
        <div className={OfCss.inputLabel}>Returnable</div>
        <select name="languages" id="lang" onChange={handleSelectChangeReturn}>
          <option disabled hidden selected>
            Choose option
          </option>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      </div>
    </>
  );
}

SelectFeilds.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
