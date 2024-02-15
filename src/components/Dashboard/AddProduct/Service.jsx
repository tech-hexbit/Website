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
        field="net_quantity_or_measure_of_commodity_in_pkg"
        placeholder="121 Kg"
      />

      {/* Month/Year of Manufacture Packing Import */}
      <InpTp1
        type="text"
        Label="Month/Year of Manufacture Packing Import"
        showData={showData}
        setData={setData}
        field="month_year_of_manufacture_packing_import"
        placeholder="08/2022"
      />
    </>
  );
}

Service.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
