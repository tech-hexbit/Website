import React from "react";
import PropTypes from "prop-types";

// components
import InputType1 from "./Input/InputType1";

// css
import PrCss from "./Css/Particulars.module.css";

export default function SupportDetails({ showData, setData }) {
  return (
    <div className={PrCss.mDiv}>
      <p className={PrCss.AboutYou}>Support Details</p>

      {/* Contact Number */}
      <InputType1
        type="text"
        Label="Support Number"
        showData={showData}
        setData={setData}
        field="ContactDetails"
        placeholder="99XXXXXX12"
      />

      {/* Contact Email */}
      <InputType1
        type="email"
        Label="Support Email"
        showData={showData}
        setData={setData}
        field="SupportEmail"
        placeholder="support@company.com"
      />
    </div>
  );
}

SupportDetails.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
