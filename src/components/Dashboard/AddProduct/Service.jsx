import React from "react";
import PropTypes from "prop-types";

//component
import InpTp1 from "./Input/InpTp1";

// css
import PrCss from "./Css/Lable.module.css";

export default function Service({ setData, showData }) {
  return (
    <>
      <p className={PrCss.AboutYou}>Product Services</p>

      {/* Net Quantity/Measure Of Commodity */}
      <InpTp1
        type="text"
        Label="Net Quantity/Measure Of Commodity (in Kg)"
        showData={showData}
        setData={setData}
        field="netQuantity"
        placeholder="121 Kg"
      />
    </>
  );
}

Service.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
