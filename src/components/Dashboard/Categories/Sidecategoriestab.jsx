import React from "react";

// css
import CCss from "./Css/Sidecategoriestab.module.css";

export default function Sidecategoriestab(props) {
  return (
    <div
      className={CCss.nameDiv}
      id={props.current === props.name ? "activeTabC" : ""}
      onClick={() => {
        props.setCurrent(props.name);
      }}
    >
      {props.name}
    </div>
  );
}
