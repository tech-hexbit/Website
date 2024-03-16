import React from "react";

// css
import BoxCss from "./Css/Box.module.css";
import pt from "./../Payment/Css/PaymentTable.module.css";

export default function Box() {
  return (
    <table className={pt.trans_table}>
      <tr>
        <th>Tracking ID</th>
        <th>Customer</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Payment Mode</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </table>
  );
}
