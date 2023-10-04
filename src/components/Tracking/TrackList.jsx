import React from "react";

// css
import THCss from "./Css/TrackingHeader.module.css";

export default function TrackList(props) {
  console.log(props.currentState);
  console.log(props.state);
  console.log(props.state == props.currentState);

  return (
    <>
      <div
        className={THCss.listmDiv}
        style={{
          opacity: props.state == props.currentState ? "1" : "0.8",
        }}
      >
        <div className={THCss.circleDiv}></div>
        <div className={THCss.allContent}>
          <p className={THCss.title}>{props.title}</p>
          <p className={THCss.des}>{props.des}</p>
          <p>
            {props.state} + {props.currentState}
          </p>
        </div>
      </div>
    </>
  );
}
