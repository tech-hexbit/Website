import React from "react";

// css
import THCss from "./Css/TrackingHeader.module.css";

export default function TrackList(props) {
  console.log(props.state);
  console.log(props.currentState);

  return (
    <>
      {props.state === props.currentState ? (
        <>
          <div className={THCss.listmDiv}>
            <div className={THCss.circleDiv}></div>
            <div className={THCss.allContent}>
              <p className={THCss.title}>{props.title}</p>
              <p className={THCss.des}>{props.des}</p>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
