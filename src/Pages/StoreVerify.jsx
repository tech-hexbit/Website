import React, { useState } from "react";

// MicroInteraction
import { Alert } from "./../MicroInteraction/Alert";

// components
import StoreVerifyMain from "../components/StoreVerify/StoreVerifyMain";

// css
import SvCss from "./Css/StoreVerify.module.css";

export default function StoreVerify() {
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });
  return (
    <>
      <div className={SvCss.l_div}>
        <div className={SvCss.box_div}>
          <StoreVerifyMain setError={setError} />
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
