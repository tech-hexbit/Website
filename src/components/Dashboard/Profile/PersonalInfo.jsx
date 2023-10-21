import React from "react";

// css
import PICss from "./Css/PersonalInfo.module.css";

export default function PersonalInfo(props) {
  return (
    <div className={PICss.personalinfotab}>
      <div className={PICss.heading}>Personal info</div>

      <div className={PICss.box}>
        <div className={PICss.inputheading}>Email</div>
        <div className={PICss.infodiv}>{props.Email}</div>
      </div>
    </div>
  );
}
