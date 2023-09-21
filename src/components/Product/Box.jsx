import React from "react";

// css
import BCss from "./Css/Box.module.css";

export default function Box(props) {
  return (
    <div className={BCss.mDiv}>
      <p className={BCss.title}>{props.title}</p>
      <p className={BCss.value}>{props.value}</p>
    </div>
  );
}
