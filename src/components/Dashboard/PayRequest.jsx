import React, { useEffect } from "react";

// components
import PaymentList from "./Payment/PaymentList";
import PaymentTable from "./Payment/PaymentTable";
import PaymentRequest from "./Payment/PaymentRequest";
import PaymentQuote from "./Payment/PaymentQuote";

// css
import Payt from "../Dashboard/Payment/Css/Payment.module.css";

export default function PayRequest() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={Payt.main}>
      <PaymentList />
      <PaymentQuote />
      <PaymentTable />
      <PaymentRequest />
    </div>
  );
}
