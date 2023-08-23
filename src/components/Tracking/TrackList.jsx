import React from "react";

// css
import THCss from "./Css/TrackingHeader.module.css";

export default function TrackList(props) {
  return (
    <div className={THCss.listmDiv}>
      <div className={THCss.logoDiv}>
        <div className={THCss.circleDiv}></div>
        <div className={THCss.lineDiv}></div>
      </div>
      <div className={THCss.allContent}>
        <p className={THCss.title}>{props.title}</p>
        <p className={THCss.des}>{props.des}</p>
      </div>
    </div>
  );
}
