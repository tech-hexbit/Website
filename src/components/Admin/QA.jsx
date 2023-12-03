import React, { useState } from "react";

// css
import SupCss from "./Css/Support.module.css";

export default function QA(props) {
  const [show, hide] = useState(false);
  return (
    <div
      className={SupCss.qaComDiv}
      onClick={() => {
        hide(!show);
      }}
    >
      <p className={SupCss.qptag}>
        <>{props.question}</>
      </p>
      <p className={SupCss.ansPTag} id={show ? "showqa" : "hideqa"}>
        <i>{props.answer}</i>
      </p>
    </div>
  );
}
