import React, { useState } from "react";
import PropTypes from "prop-types";
import InpTp1 from "./Input/InpTp1";
import TxtArea from "./Input/TxtArea";
import PrCss from "./Css/Lable.module.css";

export default function ProdParticulars({ setData, showData }) {
  return (
    <>
      <p className={PrCss.AboutYou}>Product Details</p>

      {/* Product Details */}
      <InpTp1
        type="text"
        Label="Title"
        showData={showData}
        setData={setData}
        field="name"
        placeholder="Title - XX"
      />
      <InpTp1
        type="text"
        Label="Short Description"
        showData={showData}
        setData={setData}
        field="short_desc"
        placeholder="Write product short description here..."
      />
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
  setData: PropTypes.func.isRequired,
  showData: PropTypes.object.isRequired,
};
