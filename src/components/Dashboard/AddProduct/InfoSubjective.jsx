import React from "react";
import PropTypes from "prop-types";

//component
import InpTp1 from "./Input/InpTp1";
import TxtArea from "./Input/TxtArea";

// css
import PrCss from "./Css/Lable.module.css";

export default function InfoSubjective() {
  return (
    <>
      <p className={PrCss.AboutYou}>Subjective Info</p>
    </>
  );
}
