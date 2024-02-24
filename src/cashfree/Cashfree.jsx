import React, { useState, useEffect, useContext } from "react";

// state
import AuthContext from "./../store/auth-context";

// MicroInteraction
import Load from "./../MicroInteraction/Load";

// axios
import axios from "axios";

// cashfree
import { cashfree } from "./util";

// css
import ChCss from "./Css/CashFree.module.css";

export default function Cashfree() {
  const [load, setLoad] = useState(false);
  const [sessionId, setSessionId] = useState("");

  let version = cashfree.version();

  const authCtx = useContext(AuthContext);

  const getSessionId = async (e) => {
    try {
      let data = {
        customer_id: "CID89898",
        customer_email: "waleedsdev@gmail.com",
        customer_phone: "7498608775",
        customer_name: "Waleed Shaikh",
        order_amount: 123,
        order_id: "2024-02-22-965076",
      };

      const response = await axios.post("/api/payment/cashfree/payment", data, {
        headers: { Authorization: `${authCtx.token}` },
        version,
      });
      console.log(response);

      setSessionId(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = () => {
    getSessionId();

    // let checkoutOptions = {
    //   paymentSessionId: sessionId,
    //   returnUrl: "http://localhost:8000/api/status/{order_id} ",
    // };
    // cashfree.checkout(checkoutOptions).then(function (result) {
    //   if (result.error) {
    //     alert(result.error.message);
    //   }
    //   if (result.redirect) {
    //     console.log("Redirection");
    //     console.log(result);
    //   }
    // });
  };

  return (
    <>
      <div className={ChCss.mDiv}>
        <button onClick={handlePayment} className={ChCss.PayNowBtn}>
          {load ? <Load /> : "Pay Now"}
        </button>
      </div>
      {/* <button onClick={getSessionId}>Cashfree</button> */}
    </>
  );
}
