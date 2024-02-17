import React from "react";
import PropTypes from "prop-types";

// css
import PICss from "./Css/PersonalInfo.module.css";

export default function BusinessInfo({ ShopName, GSTIN, AdditionalInfo }) {
  return (
    <div className={PICss.personalinfotab}>
      <div className={PICss.heading}>Business info</div>
      <div className={PICss.box}>
        <div className={PICss.row1}>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Business/Shop Name</div>
            <div className={PICss.infodiv}>{ShopName}</div>
          </div>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Importer License</div>
            <p className={PICss.infodiv}>{GSTIN}</p>
          </div>
        </div>
        <div className={PICss.col0}>
          <div className={PICss.inputheading}>About</div>
          <div className={PICss.infodiv}>{AdditionalInfo}</div>
        </div>
      </div>
    </div>
  );
}

BusinessInfo.propTypes = {
  ShopName: PropTypes.string.isRequired,
  GSTIN: PropTypes.string.isRequired,
  AdditionalInfo: PropTypes.string.isRequired,
};
