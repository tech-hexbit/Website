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
        <p>
          <b>Update Status</b>
        </p>
        <div className={upCss.Line}></div>

        <div>
          <label htmlFor="Status">Status</label>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
