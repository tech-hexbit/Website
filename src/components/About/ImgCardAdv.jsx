import React from "react";

// Css
import FCss from "./Css/Founders.module.css";

export default function ImgCard(props) {
  return (
    <div className={FCss.fmDIv}>
      <img src={props.img} alt="" className={FCss.imgTag} />
      <p className={FCss.name}>{props.name}</p>
    </div>
  );
}
