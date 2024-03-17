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

        <div className={upCss.upInpParDiv}>
          <p>
            <b>Status</b>
          </p>

          {/* Status */}
          <div className={upCss.upInpParDiv2}>
            <label htmlFor="Status">Status</label>
            <select name="Status" id="" className={upCss.inpTagUp}>
              <option value="Select" selected hidden>
                Select the Status
              </option>
              <option value="CASCADED">CASCADED</option>
              <option value="NEED-MORE-INFO">NEED-MORE-INFO</option>
              <option value="RESOLVED">RESOLVED</option>
            </select>
          </div>

          {/* Short Desc (Status) */}
          <div className={upCss.upInpParDiv2}>
            <label htmlFor="">Short Description</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="short_desc"
              className={upCss.inpTagUp}
            />
          </div>

          <p>
            <b>Resolutions</b>
          </p>

          {/* Short Desc (Resolution) */}
          <div className={upCss.upInpParDiv2}>
            <label htmlFor="">Short Description</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="short_desc"
              className={upCss.inpTagUp}
            />
          </div>

          {/* Long Desc (Resolution) */}
          <div className={upCss.upInpParDiv2}>
            <label htmlFor="">Long Description</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="short_desc"
              className={upCss.inpTagUp}
            />
          </div>

          <div className={upCss.inpTagRow}>
            {/* Action Triggered (Resolution) */}
            <div className={upCss.upInpParDiv2Row}>
              <label htmlFor="">Action Triggered</label>
              <select name="Status" id="" className={upCss.inpTagUp}>
                <option value="Select" selected hidden>
                  Select the Action
                </option>
                <option value="REFUND">REFUND</option>
                <option value="REPLACEMENT">REPLACEMENT</option>
                <option value="CANCEL">CANCEL</option>
                <option value="NO-ACTION">NO-ACTION</option>
              </select>{" "}
            </div>

            {/* Refund Amount (Resolution) */}
            <div className={upCss.upInpParDiv2Row}>
              <label htmlFor="">Refund Amount</label>
              <input
                type="number"
                name=""
                id=""
                placeholder="₹ 100"
                className={upCss.inpTagUp}
              />
            </div>
          </div>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
