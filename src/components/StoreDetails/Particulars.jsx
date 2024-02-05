import React from "react";
import PropTypes from "prop-types";

// components
import InputType1 from "./Input/InputType1";

// css
import PrCss from "./Css/Particulars.module.css";

export default function Particulars({ showData, setData }) {
  return (
    <div className={PrCss.mDiv}>
      {/* First Name */}
      <InputType1
        type="text"
        Label="First Name"
        showData={showData}
        setData={setData}
        field="FirstName"
        placeholder="Jhon"
      />

      {/* Last Name */}
      <InputType1
        type="text"
        Label="Last Name"
        showData={showData}
        setData={setData}
        field="LastName"
        placeholder="David"
      />
    </div>
  );
}

Particulars.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
