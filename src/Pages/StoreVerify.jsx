import React, { useState } from "react";

// components
import StoreVerifyMain from "../components/StoreVerify/StoreVerifyMain";

// css
import SvCss from "./Css/StoreVerify.module.css";

export default function StoreVerify() {
  return (
    <>
      <div className={SvCss.Ldiv}>
        <div className={SvCss.boxDiv}>
          <StoreVerifyMain />
        </div>
      </div>
    </>
  );
}
