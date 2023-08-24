// import React from 'react'

import TCss from "../css/product/tags.module.css";

export default function Tags(props) {
  return (
    <div className={TCss.mainDiv}>
      <div className={TCss.element}>{props.text}</div>
      <div style={{ cursor: "pointer" }}>x</div>
    </div>
  );
}
