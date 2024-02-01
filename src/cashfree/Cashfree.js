import React, { useEffect, useState } from "react";

// axios
import axios from "axios";

// cashfree
import { cashfree } from "./util";

export default function Cashfree() {
  const [sessionId, setSessionId] = useState("");

  const getSessionId = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("api/payment", { version })
      .then((res) => {
        setLoading(false);
        setSessionId(res.data);
        // window.open(res.data, '_blank');
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
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

  return <div>Cashfree</div>;
}
