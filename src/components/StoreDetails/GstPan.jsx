import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

// components
import VerifiedFeilds from "./Input/VerifiedFeilds";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";
import { Alert } from "./../../MicroInteraction/Alert";

//axios
import axios from "axios";

// store
import AuthContext from "./../../store/auth-context";

// css
import PrCss from "./Css/Particulars.module.css";

export default function GstPan() {
  const [load, setLoad] = useState(false);
  const [verifyPin, setVerifyPin] = useState(false);
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
    <div className={PrCss.mDiv}>
      <p className={PrCss.AboutYou}>Bank Info</p>
    </div>
  );
}
