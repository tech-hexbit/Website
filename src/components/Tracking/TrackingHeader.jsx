import React from "react";

// css
import THCss from "./Css/TrackingHeader.module.css";

export default function TrackingHeader(props) {
  return (
    <>
      <p className={THCss.titlePTag}>
        Order ID :<span>{props.id}</span>
      </p>
    </>
  );
}
