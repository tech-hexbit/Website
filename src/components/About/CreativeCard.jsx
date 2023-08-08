import React from "react";

import cardCSS from "./Css/CreativeCard.module.css";

export default function CreativeCard(props) {
  return (
    <div className={cardCSS.mainDiv}>
      <div className={cardCSS.image}>
        <img src={props.img} alt="" />
      </div>
      <div className={cardCSS.name}>{props.name}</div>
      <div className={cardCSS.designation}>{props.designation}</div>
    </div>
  );
}
