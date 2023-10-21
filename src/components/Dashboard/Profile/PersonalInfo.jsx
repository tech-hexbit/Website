import React from "react";

// css
import PICss from "./Css/PersonalInfo.module.css";

export default function PersonalInfo(props) {
  return (
    <div className={PICss.personalinfotab}>
      <div className={PICss.heading}>Personal info</div>

      <div className={PICss.box}>
        <div className={PICss.row1}>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Email</div>
            <div className={PICss.infodiv}>{props.Email}</div>
          </div>
          <div className={PICss.col1}>
            <div className={PICss.inputheading}>Mobile no.</div>
            <div className={PICss.infodiv}>{props.phone}</div>
          </div>
        </div>
        <div className={PICss.col0}>
          <div className={PICss.inputheading}>Address</div>
          <div className={PICss.infodiv}>{props.Address}</div>
        </div>
      </div>
    </div>
  );
}
