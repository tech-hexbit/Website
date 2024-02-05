import React from "react";
import PropTypes from "prop-types";

// components
import InputType1 from "./Input/InputType1";

// css
import PrCss from "./Css/Particulars.module.css";

export default function Particulars({}) {
  return (
    <div className={PrCss.mDiv}>
      <InputType1 />
    </div>
  );
}
