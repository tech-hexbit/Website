import React from "react";

// css
import CBss from "./Css/ColorBox.module.css";

export default function Box(props) {
  return (
    <div className={CBss.PBDash}>
      <img src={props.imgSrc} alt="" className={CBss.imgProCo} />
    </div>
  );
}
