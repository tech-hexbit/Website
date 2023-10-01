import React from "react";

import cardCSS from "./Css/CreativeCard.module.css";

import MissionBlurcreative from "./Blur/MissionBlurcreative";
export default function CreativeCard(props) {
  return (
    <div className={cardCSS.mainDiv}>
      <div className={cardCSS.image}>
        {/* <img src={props.img} alt="" /> */}
      <MissionBlurcreative src={props.img} blur={props.blur}/>
      </div>
      <div className={cardCSS.name}>{props.name}</div>
      <div className={cardCSS.designation}>{props.designation}</div>
    </div>
  );
}
