import React from "react";

import AdCss from "./Css/AdvisorCard.module.css";

export default function AdvisorCard(props) {
  return (
    <div className={AdCss.mainDiv}>
      <div className={AdCss.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={AdCss.details}>
        <div className={AdCss.name}>{props.name}</div>
        <div className={AdCss.company}>
          <img src={props.company} alt="" />
        </div>
      </div>
    </div>
  );
}
