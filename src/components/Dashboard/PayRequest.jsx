import React, { useEffect } from "react";

// components
import PaymentList from "./Payment/PaymentList";
import PaymentTable from "./Payment/PaymentTable";
import PaymentQuote from "./Payment/PaymentQuote";
import PaymentRequest from "./Payment/PaymentRequest";
import SelectedBlock from "./Payment/SelectedBlock";

// css
import pr from "./Payment/Css/PaymentRequest.module.css";
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

      <div className={pr.main}>
        <h3>Confirm Account Details For Payment Request </h3>
        <div className={pr.detailWrapper}>
          <PaymentRequest />
          <SelectedBlock />
        </div>
      </div>
    </div>
  );
}
