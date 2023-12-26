import React, { useEffect } from "react";

// components
import PaymentList from "./PayDetails/PaymentList";
import PaymentTable from "./PayDetails/PaymentTable";

// css
import Gate from "./../Dashboard/PayDetails/Css/PayDetails.module.css";

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
