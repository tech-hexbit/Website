import React from "react";

// css
import Gplist from "./Css/PaymentList.module.css";

export default function PaymentList(props) {
  return (
    <div className={Gplist.main}>
      {/* Total */}
      <div className={Gplist.box}>
        <h4>Total Payment</h4>
        <p className={Gplist.para}>Rs. xxxx</p>
      </div>

      {/* Processed */}
      <div className={Gplist.box}>
        <h4>Processed Amount</h4>
        <p className={Gplist.para}>Rs. xxxx</p>
      </div>

      {/* Rejected */}
      <div className={Gplist.box}>
        <h4>Rejected Payments</h4>
        <p className={Gplist.para}>Rs. xxxx</p>
      </div>

      {/* Transactions */}
      <div className={Gplist.box}>
        <h4>Transactions </h4>
        <div className={Gplist.outer_box}>
          <div className={Gplist.inside}>
            <p>Completed</p>
            <h6>287</h6>
          </div>
          <div className={Gplist.inside}>
            <p>Raised</p>
            <h6>100</h6>
          </div>
          <div className={Gplist.inside}>
            <p>Pending</p>
            <h6>90</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
