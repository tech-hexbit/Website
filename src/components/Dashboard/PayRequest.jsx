import React, { useState, useEffect } from "react";

// components
import PaymentList from "./Payment/PaymentList";
import PaymentTable from "./Payment/PaymentTable";
import PaymentQuote from "./Payment/PaymentQuote";
import SelectedBlock from "./Payment/SelectedBlock";
import PaymentRequest from "./Payment/PaymentRequest";

// css
import pr from "./Payment/Css/PaymentRequest.module.css";
import Payt from "../Dashboard/Payment/Css/Payment.module.css";

export default function PayRequest() {
  const [showSel, setSel] = useState({
    total: 0,
    amount: 0,
  });

  const raiseReq = async () => {
    console.log("raiseReq");
  };

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={Payt.main}>
      <PaymentList />
      <PaymentQuote />
      <PaymentTable setSel={setSel} showSel={showSel} />

      <div className={pr.main}>
        <h3>Confirm Account Details For Payment Request </h3>
        <div className={pr.detailWrapper}>
          <PaymentRequest />
          <SelectedBlock
            total={showSel.total}
            amount={showSel.amount}
            raiseReq={raiseReq}
          />
        </div>
      </div>
    </div>
  );
}
