import React from "react";
import PropTypes from "prop-types";

//component
import InpTp1 from "./Input/InpTp1";

// css
import PrCss from "./Css/Lable.module.css";

export default function Service({ setData, showData }) {
  return (
    <>
      <p className={PrCss.AboutYou}>Product Services</p>

      {/* Protuct Title */}
      <InpTp1
        type="text"
        Label="Title"
        showData={showData}
        setData={setData}
        field="name"
        placeholder="Title - XX"
      />
    </>
  );
}

Service.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
