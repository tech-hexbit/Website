import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// axios

// state

// MicroInteraction
import { Alert } from "../MicroInteraction/Alert";

// css
import SvCss from "./Css/StoreVerify.module.css";

import StoreVerifyMain from "../components/StoreVerify/StoreVerifyMain";

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
