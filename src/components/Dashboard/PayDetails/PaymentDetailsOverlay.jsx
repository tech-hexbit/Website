import React, { useState, useEffect, useContext } from "react";

// components
import GatewayGetinTouch from "./GetinTouch";
import Cashfree from "./../../../cashfree/Cashfree";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";
import { Alert } from "./../../../MicroInteraction/Alert";

// state
import AuthContext from "../../../store/auth-context";

// axios
import axios from "axios";

// css
import gpdo from "./Css/PaymentDetailsOverlay.module.css";

export default function PaymentDetailsOverlay({ selectedItem, code }) {
  const [dwn, setDwn] = useState(false);

  if (!selectedItem) return null;

  const authCtx = useContext(AuthContext);

  return (
    <div className={gpdo.main}>
      <div className={gpdo.h2Div}>
        <h2>Request Details</h2>

        <div className={gpdo.dwnDiv} onClick={setDwn(!dwn)}>
          {authCtx.user.access === 2 ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-down-to-line"
              >
                <path d="M12 17V3" />
                <path d="m6 11 6 6 6-6" />
                <path d="M19 21H5" />
              </svg>

              <p>Download Invoice</p>
            </>
          ) : (
            ""
          )}
        </div>
      </div>

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

      {authCtx.user.access === 2 ? <Cashfree /> : ""}

      {code === 0 ? "" : <GatewayGetinTouch />}
    </div>
  );
}
