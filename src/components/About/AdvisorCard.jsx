import React from "react";

// components
import MissionBlurAdvisory from "./Blur/MissionBlurAdvisory";

// css
import AdCss from "./Css/AdvisorCard.module.css";

export default function AdvisorCard(props) {
  return (
    <div className={AdCss.mainDiv} key={props.key}>
      <div className={AdCss.image}>
        <MissionBlurAdvisory src={props.image} blur={props.blur} />
      </div>
      <div className={AdCss.details}>
        <div className={AdCss.name}>{props.name}</div>
        <div className={AdCss.company}>
          <img src={props.company} alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
