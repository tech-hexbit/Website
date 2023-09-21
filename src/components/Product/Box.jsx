import React from "react";

// css
import BCss from "./Css/Box.module.css";

export default function Box(props) {
  return (
    <div className={BCss.mDiv}>
      <p>{props.title}</p>
    </div>
  );
}
