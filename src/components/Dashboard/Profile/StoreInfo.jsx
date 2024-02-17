import React from "react";
import PropTypes from "prop-types";

// css
import PICss from "./Css/PersonalInfo.module.css";

export default function StoreInfo({
  supportEmail,
  supportNumber,
  cancelAmt,
  cancelPer,
}) {
  return (
    <div className={PICss.personalinfotab}>
      <div className={PICss.heading}>Store info</div>

      <div className={PICss.box}>
        <div className={PICss.row1}>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Support Email</div>
            <div className={PICss.infodiv}>{supportEmail}</div>
          </div>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Support Number</div>
            <p className={PICss.infodiv}>{supportNumber}</p>
          </div>
        </div>

        <div className={PICss.row1}>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Cancellation Amount</div>
            <div className={PICss.infodiv}>{supportEmail}</div>
          </div>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Cancellation Percentage</div>
            <p className={PICss.infodiv}>{supportNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
