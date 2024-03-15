import React, { useState, useEffect, useContext } from "react";

// state
import AuthContext from "./../store/auth-context";

// MicroInteraction
import Load from "./../MicroInteraction/Load";

// axios
import axios from "axios";

// cashfree
import { load } from "@cashfreepayments/cashfree-js";

// css
import ChCss from "./Css/CashFree.module.css";

export default function Cashfree({ id }) {
  const [loadState, setLoad] = useState(false);
  const [version, setversion] = useState(null);
  const [cashfree, setCashfree] = useState(null);
  const [sessionId, setSessionId] = useState("");

  const authCtx = useContext(AuthContext);

  const getSessionId = async (e) => {
    setLoad(true);

    try {
      let data = {
        id,
      };

      const response = await axios.post(
        "/api/payment/cashfree/add/Beneficiary",
        data,
        {
          headers: { Authorization: `${authCtx.token}` },
          version,
        }
      );
      console.log(response);

      setLoad(false);

      setSessionId(response.data);
    } catch (error) {
      console.log(error);

      setLoad(false);
    }
  };

  return (
    <>
      <div className={ChCss.mDiv}>
        <button onClick={getSessionId} className={ChCss.PayNowBtn}>
          {loadState ? <Load /> : "Pay Now"}
        </button>
      </div>
      {/* <button onClick={getSessionId}>Cashfree</button> */}
    </>
  );
}
