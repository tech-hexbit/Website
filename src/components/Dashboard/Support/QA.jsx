import React, { useState } from "react";

// css
import SupCss from "./Css/Support.module.css";

export default function QA() {
  const [show, hide] = useState(false);
  return (
    <div
      className={SupCss.qaComDiv}
      onClick={() => {
        hide(!show);
      }}
    >
      <p className={SupCss.qptag}>
        <>Lorem ipsum dolor sit amet consectetur ?</>
      </p>
      <p className={SupCss.ansPTag} id={show ? "showqa" : "hideqa"}>
        <i>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          molestias repellat rerum nam corporis, dignissimos sunt reprehenderit
          vero illo provident.
        </i>
      </p>
    </div>
  );
}
