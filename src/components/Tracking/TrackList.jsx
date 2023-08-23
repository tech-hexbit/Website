import React from "react";

// css
import THCss from "./Css/TrackingHeader.module.css";

export default function TrackList(props) {
  return (
    <div className={THCss.listmDiv}>
      <div className={THCss.circleDiv}></div>
      <div>
        <p>{props.title}</p>
        <p>{props.des}</p>
      </div>
    </div>
  );
}
