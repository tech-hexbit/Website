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

export default function UpdateInfo({ update, setUpdate }) {
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
        <div className={upCss.headDiv}>
          <p>
            <b>Update Status</b>
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-x"
            className={upCss.closeIcon}
            onClick={() => {
              setUpdate(!update);
            }}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </div>
        <div className={upCss.Line}></div>

        <div>
          <label htmlFor="Status">Status</label>
          <select name="Status" id="">
            <option value="Select" selected hidden>
              Select the Status
            </option>
            <option value="CASCADED">CASCADED</option>
            <option value="NEED-MORE-INFO">NEED-MORE-INFO</option>
            <option value="RESOLVED">RESOLVED</option>
          </select>
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
