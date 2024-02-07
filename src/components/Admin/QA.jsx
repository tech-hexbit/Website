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
    <div>
      {/* Question */}
      <p className={SupCss.qptag}>
        <>{props.question}</>
      </p>

      {/* Answer */}
      <p className={SupCss.ansPTag} id={show ? "showqa" : "hideqa"}>
        <i>
          <span
            dangerouslySetInnerHTML={{
              __html: props.answer,
            }}
          />
        </i>
      </p>
    </div>
      <div>
      <p className={SupCss.tag}>
        <>Tag : {props.tag}</>
      </p>
      </div>
    </div>
  );
}
