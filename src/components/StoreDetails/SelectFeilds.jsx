import React, { useState } from "react";
import PropTypes from "prop-types";

//css
import OfCss from "./Css/OndcField.module.css";
import PrCss from "./Css/Particulars.module.css";

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
      <div className={OfCss.inpDiv}>
        <div className={OfCss.inputLabel}>Time to ship</div>
        <select name="languages" id="lang">
          <option value="select">Shipping Time</option>
          <option>8 AM - 12 PM</option>
          <option>12 PM - 4 PM</option>
          <option>4 PM - 8 PM</option>
        </select>
      </div>
      <div className={OfCss.inpDiv}>
        <div className={OfCss.inputLabel}>Cancellable</div>
        <select name="languages" id="lang" onChange={handleSelectChangeCancel}>
          <option>Choose option</option>
          <option>True</option>
          <option>False</option>
        </select>
      </div>
      <div className={OfCss.inpDiv}>
        <div className={OfCss.inputLabel}>Returnable</div>
        <select name="languages" id="lang" onChange={handleSelectChangeReturn}>
          <option>Choose option</option>
          <option>True</option>
          <option>False</option>
        </select>
      </div>
      <div className={`${OfCss.inpDiv} ${OfCss.ContactLdiv}`}>
        <div className={OfCss.ContactDiv}>
          <p className={OfCss.inputLabel}>Contact Details</p>
          <input
            type="number"
            name="Contact Details"
            value={showData.ContactDetails}
            id=""
            placeholder="Contact Details"
            onChange={(e) => {
              setData({
                ...showData,
                ContactDetails: e.target.value,
              });
            }}
          />
        </div>
        <div className={OfCss.ContactDiv}>
          <p className={OfCss.inputLabel}>Support Email</p>
          <input
            type="text"
            name="Support Email"
            value={showData.SupportEmail}
            id=""
            placeholder="Contact Email"
            onChange={(e) => {
              setData({
                ...showData,
                SupportEmail: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </>
  );
}

SelectFeilds.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
