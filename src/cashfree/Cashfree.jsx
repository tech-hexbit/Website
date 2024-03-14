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

export default function Cashfree() {
  const [loadState, setLoad] = useState(false);
  const [version, setversion] = useState(null);
  const [cashfree, setCashfree] = useState(null);
  const [sessionId, setSessionId] = useState("");

  const authCtx = useContext(AuthContext);

  const getSessionId = async (e) => {
    try {
      let data = {
        beneId: "JOHN18012",
        name: "john doe",
        email: "johndoe@cashfree.com",
        phone: "9876543210",
        bankAccount: "00001111222233",
        ifsc: "HDFC0000001",
        address1: "ABC Street",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560001",
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
          {loadState ? <Load /> : "Pay Now"}
        </button>
      </div>
      {/* <button onClick={getSessionId}>Cashfree</button> */}
    </>
  );
}
