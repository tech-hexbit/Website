import React from "react";

// css
import DmTCss from "./Css/DataMain.module.css";

export default function DataTab(props) {
  return (
    <div
      className={DmTCss.mDivTab}
      style={{ backgroundColor: `${props.bgColor}` }}
    >
      <p className={DmTCss.valPTagTab}>{props.val}</p>
      <p className={DmTCss.labelPTagTab}>{props.label}</p>
    </div>
  );
}
