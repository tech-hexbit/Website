import React, { useState } from "react";
import PropTypes from "prop-types";

// components
import InputType1 from "./Input/InputType1";

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

  const handleChangeTTS = (event) => {
    const selectedValue = event.target.value;
    setData({
      ...showData,
      TimeToShip: selectedValue,
    });
  };

  return (
    <>
      {/* Time to ship */}
      <div className={OfCss.inpDiv}>
        <div className={OfCss.inputLabel}>Time to ship</div>
        <select name="languages" id="lang" onChange={handleChangeTTS}>
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
      {/* Radius */}
      <InputType1
        type="number"
        Label="Serviceability Radius (in Km)"
        showData={showData}
        setData={setData}
        field="radius"
        placeholder="1500 (Km)"
      />{" "}
    </>
  );
}

SelectFeilds.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
