import React from "react";
import PropTypes from "prop-types";

// components
import VerifiedFeilds from "./Input/VerifiedFeilds";

// css
import PrCss from "./Css/Particulars.module.css";

export default function Bank({ showData, setData }) {
  return (
    <div className={PrCss.mDiv}>
      <p className={PrCss.AboutYou}>Bank Info</p>
    </div>
  );
}
