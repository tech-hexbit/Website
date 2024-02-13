import React from "react";
import PropTypes from "prop-types";

//component
import InpTp1 from "./Input/InpTp1";
import TxtArea from "./Input/TxtArea";

// css
import PrCss from "./Css/Lable.module.css";

export default function InfoSubjective({ setData, showData }) {
  return (
    <>
      <p className={PrCss.AboutYou}>Subjective Info</p>

      {/* Net Quantity */}
      <InpTp1
        type="text"
        Label="Title"
        showData={showData}
        setData={setData}
        field="net_quantity"
        placeholder="Title - XX"
      />
    </>
  );
}

InfoSubjective.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
