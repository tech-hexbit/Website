import React, { useEffect } from "react";

// components
import PaymentList from "./PayDetails/GatewayPaymentList";
import PaymentTable from "./PayDetails/GatewayPaymentTable";

// css
import Gate from "./../Dashboard/PayDetails/Css/Gateway.module.css";

export default function PayDetails() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={Gate.main}>
        <PaymentList />
        <PaymentTable />
      </div>
    </>
  );
}
