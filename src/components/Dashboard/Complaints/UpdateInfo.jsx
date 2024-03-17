import React, { useState, useEffect, useContext, useRef } from "react";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";
import { Alert } from "./../../../MicroInteraction/Alert";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// css
import upCss from "./Css/UpdateInfo.module.css";

export default function UpdateInfo() {
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  return (
    <>
      <div className={upCss.mDiv}>
        <div>
          <p>
            <b>Update Status</b>
          </p>

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
            class="lucide lucide-external-link"
          >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </div>
        <div className={upCss.Line}></div>

        <div>
          <label htmlFor="Status">Status</label>
        </div>
        <div>
          <label htmlFor="">Short Desc (Status)</label>
        </div>
        <div>
          <label htmlFor="">Short Desc (resolution)</label>
        </div>
        <div>
          <label htmlFor="">Long Desc (resolution)</label>
        </div>
        <div>
          <label htmlFor="">Action Triggered (resolution)</label>
        </div>
        <div>
          <label htmlFor="">Refund Amount (resolution)</label>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
