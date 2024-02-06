import React, { useState } from "react";
import PropTypes from "prop-types";

//css
import OfCss from "./Css/OndcField.module.css";
import PrCss from "./Css/Particulars.module.css";

export default function SelectFeilds({ showData, setData }) {
  return (
    <div className={PrCss.mDiv}>
      <p className={PrCss.AboutYou}>Store Info</p>
    </div>
  );
}

SelectFeilds.propTypes = {
  showData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
