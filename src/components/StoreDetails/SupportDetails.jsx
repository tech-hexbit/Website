import React from "react";
import PropTypes from "prop-types";

// components
import InputType1 from "./Input/InputType1";

// css
import PrCss from "./Css/Particulars.module.css";

export default function SupportDetails({ showData, setData }) {
  return <div>SupportDetails</div>;
}

SupportDetails.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
