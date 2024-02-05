import React, { useState } from "react";
import PropTypes from "prop-types";

// components
import InputType1 from "./Input/InputType1";
import DaysField from "./DaysField";

// css
import PrCss from "./Css/Particulars.module.css";

export default function StoreDetails({ showData, setData }) {
  return (
    <div className={PrCss.mDiv}>
      <p className={PrCss.AboutYou}>Store Info</p>

      <DaysField showData={showData} setData={setData} />
    </div>
  );
}

StoreDetails.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
