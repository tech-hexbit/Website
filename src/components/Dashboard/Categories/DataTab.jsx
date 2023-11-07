import React from "react";
import { Link } from "react-router-dom";

// css
import DmTCss from "./Css/DataMain.module.css";

export default function DataTab(props) {
  return (
    <div
      className={DmTCss.mDivTab}
      style={{ backgroundColor: `${props.bgColor}` }}
    >
      <Link to="/me/sales" className="LinkStyle">
        <p className={DmTCss.valPTagTab}>{props.val}</p>
        <p className={DmTCss.labelPTagTab}>{props.label}</p>
      </Link>
    </div>
  );
}
