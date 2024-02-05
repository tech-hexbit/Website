import React, { useState } from "react";

// components
import StoreVerifyMain from "../components/StoreVerify/StoreVerifyMain";

// css
import SvCss from "./Css/StoreVerify.module.css";

export default function StoreVerify() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className={SvCss.Ldiv}>
        <div className={SvCss.boxDiv}>
          {/* <StoreVerifyMain /> */}

          <div onClick={scrollToTop} className={SvCss.scrollToTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-up"
            >
              <path d="M8 6L12 2L16 6" />
              <path d="M12 2V22" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
