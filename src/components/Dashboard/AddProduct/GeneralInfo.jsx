import React from "react";
import PropTypes from "prop-types";

//component
import InpTp1 from "./Input/InpTp1";

// css
import PrCss from "./Css/Lable.module.css";

export default function GeneralInfo() {
  return (
    <>
      <p className={PrCss.AboutYou}>General Info</p>
    </>
  );
}
