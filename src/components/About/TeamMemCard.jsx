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
        <div>
          <button className={TeamCss.designation}>{props.designation}</button>
        </div>
      </div>
    </div>
  );
}
