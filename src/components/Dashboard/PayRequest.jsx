import React from "react";

// components
import PaymentList from "./Payment/PaymentList";
import PaymentTable from "./Payment/PaymentTable";
import PaymentRequest from "./Payment/PaymentRequest";
import PaymentQuote from "./Payment/PaymentQuote";

// css
import Payt from "../Dashboard/Payment/Css/Payment.module.css";

export default function PayRequest() {
  return (
    <div className={Payt.main}>
      <PaymentList />
      <PaymentQuote />
      <PaymentTable />
      <PaymentRequest />
    </div>
  );
}
