import React from "react";

import GCCss from "./Css/GrowCard.module.css";

export default function GrowCard(props) {
  return (
    <div className={GCCss.mainDiv}>
      <div className={GCCss.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={GCCss.details}>
        <div className={GCCss.heading}>{props.heading}</div>
        <div className={GCCss.subHead}>{props.subHead}</div>
      </div>
    </div>
  );
}
