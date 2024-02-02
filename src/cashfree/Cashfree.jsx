import React, { useState, useEffect, useContext } from "react";

// state
import AuthContext from "./../store/auth-context";

// axios
import axios from "axios";

// cashfree
import { cashfree } from "./util";

export default function Cashfree() {
  const [sessionId, setSessionId] = useState("");

  let version = cashfree.version();

  const authCtx = useContext(AuthContext);

  const getSessionId = async (e) => {
    try {
      const response = await axios.post(
        "/api/common/payment/cashfree/payment",
        {
          headers: { Authorization: `${authCtx.token}` },
          version,
        }
      );
      console.log(response);

      setSessionId(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = () => {
    let checkoutOptions = {
      paymentSessionId: sessionId,
      returnUrl: "http://localhost:8000/api/status/{order_id} ",
    };
    cashfree.checkout(checkoutOptions).then(function (result) {
      if (result.error) {
        alert(result.error.message);
      }
      if (result.redirect) {
        console.log("Redirection");
        console.log(result);
      }
    });
  };

  return (
    <>
      <button>Cashfree</button>
      {/* <button onClick={getSessionId}>Cashfree</button> */}
    </>
  );
}
