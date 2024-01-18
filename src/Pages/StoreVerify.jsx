import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// axios
import axios from "axios";

// state
import AuthContext from "../store/auth-context";

// MicroInteraction
import Load from "../MicroInteraction/Load";
import { Alert } from "../MicroInteraction/Alert";

// css
import SvCss from "./Css/StoreVerify.module.css";

import StoreVerifyMain from "../components/StoreVerify/StoreVerifyMain";
import TextInput from "../components/StoreVerify/TextInput";
import BankFields from "../components/StoreVerify/BankFields";
import Ondc_Details from "../components/StoreVerify/OndcField";
import FileInput from "../components/StoreVerify/FileInput";
import Heading from "../components/StoreVerify/Heading";
import TimingField from "../components/StoreVerify/TimingField";
import VerifiedFields from "../components/StoreVerify/VerifiedFields";
import PincodeField from "../components/StoreVerify/PincodeField";
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
