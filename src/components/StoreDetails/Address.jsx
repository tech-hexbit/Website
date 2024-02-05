import React from "react";

// css
import AdCss from "./Css/Address.module.css";
import PrCss from "./Css/Particulars.module.css";

export default function Address() {
  return (
    <div className={PrCss.mDiv}>
      <p className={PrCss.AboutYou}>Address</p>
      Address
    </div>
  );
}
