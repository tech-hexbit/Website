import React from "react";

import TeamCss from "./Css/TeamMemCard.module.css";

export default function TeamMemCard(props) {
  return (
    <div className={TeamCss.mainCard}>
      <div className={TeamCss.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={TeamCss.details}>
        <div className={TeamCss.name}>{props.name}</div>
        <div className={TeamCss.designation}>{props.designation}</div>
        <div>
          <img src={props.img1} alt="" className={TeamCss.img1} />
          <br />
          <img src={props.img2} alt="" className={TeamCss.img2} />
        </div>
      </div>
    </div>
  );
}
