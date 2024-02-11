import React from "react";
import PropTypes from "prop-types";

//component
import InpTp1 from "./Input/InpTp1";

// css
import PrCss from "./Css/Lable.module.css";

export default function GeneralInfo({ setData, showData }) {
  return (
    <>
      <p className={PrCss.AboutYou}>General Info</p>

      {/* Manufacturer name */}
      <InpTp1
        type="text"
        Label="Manufacturer name"
        showData={showData}
        setData={setData}
        field="manufacturer_or_packer_name"
        placeholder="Frito-Lay, INC."
      />

      {/* Brand name */}
      <InpTp1
        type="text"
        Label="Brand name"
        showData={showData}
        setData={setData}
        field="brand_name"
        placeholder="Adidas"
      />

      {/* MRP */}
      <InpTp1
        type="number"
        Label="Maximum Retail Price (MRP)"
        showData={showData}
        setData={setData}
        field="maximum_value"
        placeholder="₹ 121"
      />

      {/* Stock */}
      <InpTp1
        type="number"
        Label="In Stock"
        showData={showData}
        setData={setData}
        field="maximumCount"
        placeholder="12"
      />

      {/* Discounts */}
      <InpTp1
        type="number"
        Label="Discounts / Offers (in %)"
        showData={showData}
        setData={setData}
        field="Discounts"
        placeholder="12 %"
      />
    </>
  );
}

GeneralInfo.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
