import React from "react";
import PropTypes from "prop-types";

//component
import InpTp1 from "./Input/InpTp1";
import TxtArea from "./Input/TxtArea";

// css
import PrCss from "./Css/Lable.module.css";
import ItCss from "./Input/Css/InputType1.module.css";

export default function ProductCategory({ setData, showData }) {
  return (
    <>
      <p className={PrCss.AboutYou}>Publish Info</p>
    </>
  );
}

ProductCategory.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
