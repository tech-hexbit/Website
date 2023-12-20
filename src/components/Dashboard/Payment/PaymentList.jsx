// const PaymentList = () => {

// };

// export default PaymentList;

import React from "react";

// css
import pl from "./Css/PaymentList.module.css";

export default function PaymentList() {
  return (
    <div className={pl.main}>
      <div className={pl.box}>
        <h4>Total Spent</h4>
        <div className={pl.outer_box_one}>
          <div className={pl.inside}>
            <p>Delivered (INR)</p>
            <h6>Rs. xxxxx</h6>
          </div>
          <div className={pl.inside}>
            <p>Shipped (INR)</p>
            <h6>Rs. xxxxx</h6>
          </div>
          <div className={pl.inside}>
            <p>Accepted (INR)</p>
            <h6>Rs. xxxxx</h6>
          </div>
        </div>
      </div>
      <div className={pl.box}>
        <h4>Outstanding Amount</h4>
        <div className={pl.outer_box_two}>
          <div className={pl.inside}>
            <p>Shipped (INR)</p>
            <h6>Rs. XXXX</h6>
          </div>
          <div className={pl.inside}>
            <p>Delivered (INR)</p>
            <h6>Rs. XXXX</h6>
          </div>
        </div>
      </div>
      <div className={pl.box}>
        <h4>Upcoming Payments</h4>
        <div className={pl.outer_box}>
          <div className={pl.inside}>
            <p>Delivered (INR) (Post Return Window )</p>
            <h6>Rs. XXXXXXX</h6>
          </div>
        </div>
      </div>
      <div className={pl.box}>
        <h4>Transactions </h4>
        <div className={pl.outer_box}>
          <div className={pl.inside}>
            <p>Completed</p>
            <h6>287</h6>
          </div>
          <div className={pl.inside}>
            <p>Raised</p>
            <h6>100</h6>
          </div>
          <div className={pl.inside}>
            <p>Pending</p>
            <h6>90</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
