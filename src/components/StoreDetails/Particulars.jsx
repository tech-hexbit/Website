import React from "react";
import PropTypes from "prop-types";

// components
import InputType1 from "./Input/InputType1";

// css
import PrCss from "./Css/Particulars.module.css";

export default function Particulars({ showData, setData }) {
  return (
    <div className={PrCss.mDiv}>
      <p className={PrCss.AboutYou}>About You</p>

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

      {/* Legal Name */}
      <InputType1
        type="text"
        Label="Legal Name"
        showData={showData}
        setData={setData}
        field="LegalName"
        placeholder="Jhon David"
      />

      {/* Email */}
      <InputType1
        type="email"
        Label="Email ID"
        showData={showData}
        setData={setData}
        field="EmailID"
        placeholder="Enter your email"
      />

      {/* DOB */}
      <InputType1
        type="date"
        Label="DOB"
        showData={showData}
        setData={setData}
        field="DOB"
        placeholder="Enter your DOB"
      />
    </div>
  );
}

Particulars.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
