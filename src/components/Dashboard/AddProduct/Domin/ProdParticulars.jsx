import React from "react";
import PropTypes from "prop-types";

//component
import InpTp1 from "./Input/InpTp1";
import TxtArea from "./Input/TxtArea";

// css
import PrCss from "./Css/Lable.module.css";

export default function ProdParticulars({ setData, showData }) {
  return (
    <>
      <p className={PrCss.AboutYou}>Product Details</p>

      {/* Protuct Title */}
      <InpTp1
        type="text"
        Label="Title"
        showData={showData}
        setData={setData}
        field="name"
        placeholder="Title - XX"
      />

      {/* Short Description */}
      <InpTp1
        type="text"
        Label="Short Description"
        showData={showData}
        setData={setData}
        field="short_desc"
        placeholder="Write product short description here..."
      />

      {/* Long Description */}
      <TxtArea
        Label="Long Description"
        showData={showData}
        setData={setData}
        field="long_desc"
        placeholder="Write long product description here..."
      />
    </>
  );
}

ProdParticulars.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
