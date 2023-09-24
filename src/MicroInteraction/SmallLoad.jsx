import React from "react";

import SmallLoadCss from "./Css/SmallLoad.module.css";

export default function SmallLoad() {
  return (
    <svg className={SmallLoadCss.spinner} viewBox="0 0 50 50">
      <circle
        className={SmallLoadCss.path}
        cx="24"
        cy="24"
        r="20"
        fill="none"
        stroke-width="5"
      ></circle>
    </svg>
  );
}
