import React, { useState, useEffect, useContext } from "react";
import { load } from "@cashfreepayments/cashfree-js";

// state
import AuthContext from "./../store/auth-context";

// MicroInteraction
import Load from "./../MicroInteraction/Load";

// axios
import axios from "axios";

// cashfree
// import { cashfree } from "./util";

// css
import ChCss from "./Css/CashFree.module.css";

export default function Cashfree() {
  const [load, setLoad] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [cashfree, setCashfree] = useState(null);
  const [version, setversion] = useState(null);

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

      setLoad(false);

      setSessionId(response.data);
    } catch (error) {
      console.log(error);

      setLoad(false);
    }
  };

  const handlePayment = () => {
    setLoad(true);

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

  useEffect(() => {
    const loadCashfree = async () => {
      try {
        const cashfreeInstance = await load({ mode: "sandbox" }); // Load Cashfree asynchronously
        setCashfree(cashfreeInstance); // Set the Cashfree instance in state
      } catch (error) {
        console.error("Error loading Cashfree:", error);
      }
    };

    loadCashfree();
  }, []);

  useEffect(() => {
    if (cashfree === null) return;

    setversion(cashfree.version());
  }, [cashfree]);

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
