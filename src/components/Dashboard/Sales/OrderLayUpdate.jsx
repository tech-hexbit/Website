import React, { useState, useEffect, useContext } from "react";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// Css
import osCss from "./Css/overallSales.module.css";
import OLCss from "./Css/OrderLayUpdate.module.css";

export default function OrderLayUpdate(props) {
  return (
    <>
      <div className={OLCss.mDiv}>
        <div className={OLCss.contendDiv}>
          <p className={OLCss.UpdateOrderPTag}>UPDATE ORDER STATUS</p>
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
            class="lucide lucide-x"
            className={OLCss.closeBtn}
            onClick={() => {
              props.setEdit(false);
            }}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>

          <div></div>
        </div>
      </div>
    </>
  );
}
