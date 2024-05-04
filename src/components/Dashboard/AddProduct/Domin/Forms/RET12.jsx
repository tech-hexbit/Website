import React from "react";
import PropTypes from "prop-types";

// data
import inpData from "./../Json/Ret12.json";

// css
import PrCss from "./../Css/Lable.module.css";

export default function RET12({ domain }) {
  return (
    <>
      <p className={PrCss.AboutYou}>Product Details</p>
      RET12
    </>
  );
}

RET12.propTypes = {
  domain: PropTypes.string.isRequired,
};
