import React from "react";
import PropTypes from "prop-types";

// components
import InputType1 from "./Input/InputType1";

//css
import OfCss from "./Css/OndcField.module.css";
import PrCss from "./Input/Css/InputType1.module.css";

const SelectInput = ({ setData, showData }) => {
  const handleSelectChangeLocation = (event) => {
    const selectedValue = event.target.value;
    setData({
      ...showData,
      LocationAvailabilityMode: selectedValue,
    });
  };

  return (
    <>
      <div className={OfCss.inpDiv}>
        <div className={OfCss.inputLabel}>Location Availability Mode</div>
        <select
          name="languages"
          id="lang"
          onChange={handleSelectChangeLocation}
        >
          <option value="select">Select Availability</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      {/* Store Description */}
      <InputType1
        type="text"
        Label="Store Description"
        showData={showData}
        setData={setData}
        field="Description"
        placeholder="about the store"
      />

      {/* Long Description */}
      <div className={PrCss.inpDiv}>
        <p className={PrCss.inputLabel}>Store Long Description</p>

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className={PrCss.textArea}
          placeholder="About the Store"
          onChange={(e) => {
            setData({ ...showData, LongDes: e.target.value });
          }}
        ></textarea>
      </div>

      {/* Cancellation Percentage */}
      <InputType1
        type="number"
        Label="Cancellation Percentage"
        showData={showData}
        setData={setData}
        field="Percentage"
        placeholder="10%"
      />

      {/* Cancellation Amount */}
      <InputType1
        type="number"
        Label="Cancellation Amount"
        showData={showData}
        setData={setData}
        field="amountValue"
        placeholder="INR 50"
      />
    </>
  );
};

SelectInput.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};

export default SelectInput;
