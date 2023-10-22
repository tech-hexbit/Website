import React from "react";

// css
import PICss from "./Css/PersonalInfo.module.css";

export default function BusinessInfo(props) {
  return (
    <div className={PICss.personalinfotab}>
      <div className={PICss.heading}>Business info</div>
      <div className={PICss.box}>
        <div className={PICss.row1}>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Business/Shop Name</div>
            <div className={PICss.infodiv}>{props.ShopName}</div>
          </div>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>GSTIN</div>
            <p className={PICss.infodiv}>{props.GSTIN}</p>
          </div>
        </div>
        <div className={PICss.col0}>
          <div className={PICss.inputheading}>About</div>
          <div className={PICss.infodiv}>{props.AdditionalInfo}</div>
        </div>
      </div>
    </div>
  );
}
