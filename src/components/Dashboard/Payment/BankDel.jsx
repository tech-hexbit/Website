import React from "react";

// css
import pr from "./Css/PaymentRequest.module.css";

export default function BankDel(props) {
  return (
    <>
      <div className={pr.grid} key={props.key}>
        <div className={pr.gridItem}>
          <input type="checkbox" className={pr.checkBoxBank} />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-wallet-2"
          >
            <path d="M17 14h.01" />
            <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
          </svg>
        </div>
        {/* BANK NAME */}
        <div className={pr.gridItem}>
          <h4>BANK</h4>
          <h3>{props.BankName}</h3>
        </div>
        {/* ACCOUNT NUMBER */}
        <div className={pr.gridItem}>
          <h4>LAST 4 Digit</h4>
          <h3>{props.AccountNumber}</h3>
        </div>
        {/* HOLDER'S NAME */}
        <div className={pr.gridItem}>
          <h4>Account Holder</h4>
          <h3>{props.AccountHolderName}</h3>
        </div>
        {/* IFSC CODE */}
        <div className={pr.gridItem}>
          <h4>IFSC CODE</h4>
          <h3>{props.IfscCode}</h3>
        </div>
      </div>
    </>
  );
}
