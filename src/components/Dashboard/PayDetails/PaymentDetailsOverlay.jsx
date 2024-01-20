import React from "react";

// components
import GatewayGetinTouch from "./GetinTouch";

// css
import gpdo from "./Css/PaymentDetailsOverlay.module.css";

export default function PaymentDetailsOverlay({ selectedItem }) {
  if (!selectedItem) return null;

  console.log(selectedItem);

  return (
    <div className={gpdo.main}>
      <h2>Request Details</h2>
      <div className={gpdo.wrapper}>
        <div className={gpdo.item}>
          <p> Ref Number</p>
          <p>{selectedItem[0]._id.slice(-4)}</p>
        </div>
        <div className={gpdo.item}>
          <p> Request Date & Time</p>
          <p>
            {selectedItem[0].when.date}, {selectedItem[0].when.time}
          </p>
        </div>
        <div className={gpdo.item}>
          <p className={gpdo.bold}>Status</p>
          {/* <p className={gpdo.bold}>{status}</p> */}
        </div>
        <div className={gpdo.item}>
          <p className={gpdo.bold}>Status Code</p>
          {/* <p className={gpdo.bold}>{paymentMode}</p> */}
        </div>
        <div className={gpdo.item}>
          <p>Payment Method</p>
          <p>NEFT</p>
        </div>
        <div className={gpdo.item}>
          <p> Account Number</p>
          <p>012345678</p>
        </div>
        <div className={gpdo.item}>
          <p> Account Holder Name</p>
          {/* <p>{accountHolderName}</p> */}
        </div>
        <div className={gpdo.item}>
          <p>Bank Name</p>
          <p>SBI</p>
        </div>
        <div className={gpdo.item}>
          <p>IFSC Code</p>
          <p>SBIN0123456</p>
        </div>
        <div className={gpdo.item}>
          <p>UTR Number</p>
          <p>SVIN1234567890</p>
        </div>
        <div className={gpdo.item}>
          <p>Payment Date & Time</p>
          <p>05-03-2023, 13:22:16</p>
        </div>
        <div className={gpdo.item}>
          <p>Request Amount</p>
          <p>INR 366.16</p>
        </div>
        <div className={gpdo.item}>
          <p>Platform Fee</p>
          <p>INR 20</p>
        </div>
        <div className={gpdo.item}>
          <p>Tax</p>
          <p>INR 16</p>
        </div>
        <div className={gpdo.final}>
          <p>Final Transferred Amount (Total)</p>
          <p>INR 330.16</p>
        </div>
      </div>
      <GatewayGetinTouch />
    </div>
  );
}
