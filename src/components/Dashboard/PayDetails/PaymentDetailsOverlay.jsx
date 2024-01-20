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
          <p className={gpdo.bold}> {selectedItem[0].status}</p>
        </div>
        <div className={gpdo.item}>
          <p>Payment Method</p>
          <p>
            {" "}
            [{" "}
            {selectedItem[0].order.map((val, key) => {
              const lastFourChars = val.orderID.payment.type;
              return key === selectedItem[0].order.length - 1
                ? lastFourChars
                : `${lastFourChars}, `;
            })}{" "}
            ]
          </p>
        </div>
        <div className={gpdo.item}>
          <p> Account Number</p>
          <p>{selectedItem[0].bank.BankDetails[0].AccountNumber}</p>
        </div>
        <div className={gpdo.item}>
          <p> Account Holder Name</p>
          <p>{selectedItem[0].bank.BankDetails[0].AccountHolderName}</p>
        </div>
        <div className={gpdo.item}>
          <p>Bank Name</p>
          <p>{selectedItem[0].bank.BankDetails[0].BankName}</p>
        </div>
        <div className={gpdo.item}>
          <p>IFSC Code</p>
          <p>{selectedItem[0].bank.BankDetails[0].IfscCode}</p>
        </div>
        <div className={gpdo.item}>
          <p>UTR Number</p>
          <p>
            {" "}
            [{" "}
            {selectedItem[0].order.map((val, key) => {
              const lastFourChars = val.orderID.payment.uri;
              return key === selectedItem[0].order.length - 1
                ? lastFourChars
                : `${lastFourChars}, `;
            })}{" "}
            ]
          </p>
        </div>
        <div className={gpdo.item}>
          <p>Payment Date & Time</p>
          <p>05-03-2023, 13:22:16</p>
        </div>
        <div className={gpdo.item}>
          <p>Request Amount</p>
          <p>INR {selectedItem[0].breakUp[0].amount.toFixed(2)}</p>
        </div>
        <div className={gpdo.item}>
          <p>Platform Fee</p>
          <p>INR {selectedItem[0].breakUp[0].platformFee.toFixed(2)}</p>
        </div>
        <div className={gpdo.item}>
          <p>Tax</p>
          <p>INR {selectedItem[0].breakUp[0].tax.toFixed(2)}</p>
        </div>
        <div className={gpdo.final}>
          <p>Final Transferred Amount (Total)</p>
          <p>INR {selectedItem[0].totalAmount.toFixed(2)}</p>
        </div>
      </div>
      <GatewayGetinTouch />
    </div>
  );
}
