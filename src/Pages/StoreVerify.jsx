import React from "react";

// components
import StoreVerifyMain from "../components/StoreVerify/StoreVerifyMain";

// css
import SvCss from "./Css/StoreVerify.module.css";

export default function StoreVerify() {
  return (
    <>
      <div className={SvCss.l_div}>
        <div className={SvCss.box_div}>
          <StoreVerifyMain setError={setError} />
        </div>
      </div>
    </>
  );
}
