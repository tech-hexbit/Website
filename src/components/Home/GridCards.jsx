import React from "react";

// css
import GcCss from "./Css/GridCards.module.css";

export default function GridCards(props) {
  return (
    <div className={GcCss.mDiv}>
      <div className={GcCss.leftDiv}>
        <img src={props.imgSrc} alt="" className={GcCss.imgTag} />
      </div>
      <div className={GcCss.rightDiv}>
        <p className={GcCss.titlePTag}>
          <b>{props.title}</b>
        </p>
        <p className={GcCss.descPTag}>{props.desc}</p>
      </div>
    </div>
  );
}
