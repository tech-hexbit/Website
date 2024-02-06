import React, { useState } from "react";
import PropTypes from "prop-types";

// components
import InputType1 from "./Input/InputType1";
import DaysField from "./DaysField";
import TimingField from "./TimingField";
import SelectInput from "./SelectInput";
import SelectFeilds from "./SelectFeilds";
import SupportDetails from "./SupportDetails";

// css
import PrCss from "./Css/Particulars.module.css";

export default function StoreDetails({ showData, setData }) {
  return (
    <div className={PrCss.mDiv}>
      <p className={PrCss.AboutYou}>Store Info</p>
      <SelectInput showData={showData} setData={setData} />
      <SelectFeilds showData={showData} setData={setData} />
      <SupportDetails showData={showData} setData={setData} />
      <TimingField showData={showData} setData={setData} />
      <DaysField showData={showData} setData={setData} />
    </div>
  );
}

StoreDetails.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
