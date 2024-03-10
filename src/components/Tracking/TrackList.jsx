import React from "react";

// css
import THCss from "./Css/TrackingHeader.module.css";

export default function TrackList(props) {
  return (
    <>
      <div
        className={THCss.listmDiv}
        style={{
          opacity: props.state == props.currentState ? "1" : "0.7",
        }}
      >
        <div
          className={
            props.val === props.stateVal
              ? `${THCss.circleDiv}`
              : `${THCss.HcircleDiv}`
          }
        ></div>
        {/* Content */}
        <div className={THCss.allContent}>
          <p className={THCss.title}>{props.title}</p>
          <p className={THCss.des}>{props.des}</p>
        </div>

        {props.state == props.currentState && (
          <div>
            <p>{props.data.logistics.currentLocation}</p>
          </div>
        )}
      </div>
    </>
  );
}
