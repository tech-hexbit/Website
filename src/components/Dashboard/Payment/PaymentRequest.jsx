import React from "react";

// css
import pr from "./Css/PaymentRequest.module.css";

export default function PaymentRequest() {
  return (
    <div className={pr.main}>
      <h3>Confirm Account Details For Payment Request </h3>
      <div className={pr.detail_wrapper}>
        <div className={pr.details_left}>
          <p>
            <span>
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
                class="lucide lucide-wallet-2"
              >
                <path d="M17 14h.01" />
                <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
              </svg>
            </span>
            <span>Account Details</span>
          </p>
          <div className={pr.grid}>
            <div className={pr.grid_item}>
              <input type="checkbox" />
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
                class="lucide lucide-wallet-2"
              >
                <path d="M17 14h.01" />
                <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
              </svg>
            </div>
            <div className={pr.grid_item}>
              <h4>BANK</h4>
              <h3>SBI</h3>
            </div>
            <div className={pr.grid_item}>
              <h4>LAST 4 Digit</h4>
              <h3>1234</h3>
            </div>
            <div className={pr.grid_item}>
              <h4>Account Holder</h4>
              <h3>TATHAGT</h3>
            </div>
            <div className={pr.grid_item}>
              <h4>IFSC CODE</h4>
              <h3>SBIN00000153</h3>
            </div>
          </div>
          <div className={pr.grid}>
            <div className={pr.grid_item}>
              <input type="checkbox" />
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
                class="lucide lucide-wallet-2"
              >
                <path d="M17 14h.01" />
                <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
              </svg>
            </div>
            <div className={pr.grid_item}>
              <h4>BANK</h4>
              <h3>IDBI</h3>
            </div>
            <div className={pr.grid_item}>
              <h4>LAST 4 Digit</h4>
              <h3>1234</h3>
            </div>
            <div className={pr.grid_item}>
              <h4>Account Holder</h4>
              <h3>ANUJ</h3>
            </div>
            <div className={pr.grid_item}>
              <h4>IFSC CODE</h4>
              <h3>IDBI0000012</h3>
            </div>
          </div>
        </div>

        <div className={pr.wrapper}>
          <div className={pr.details_right}>
            <p>
              <span>
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
                  class="lucide lucide-book-text"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  <path d="M8 7h6" />
                  <path d="M8 11h8" />
                </svg>
              </span>
              <span>Alışveriş Özeti</span>
            </p>
            <div className={pr.flex}>
              <div className={pr.flex_item}>
                <h4>Total Selected</h4>
                <h1>1</h1>
              </div>
              <div className={pr.flex_item}>
                <h4>Total Amount</h4>
                <h1 className={pr.ruppee}>
                  <span>
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
                      class="lucide lucide-indian-rupee"
                    >
                      <path d="M6 3h12" />
                      <path d="M6 8h12" />
                      <path d="m6 13 8.5 8" />
                      <path d="M6 13h3" />
                      <path d="M9 13c6.667 0 6.667-10 0-10" />
                    </svg>
                  </span>
                  317.46
                </h1>
              </div>
            </div>
            <div className={pr.flex_item}>
              <button>Raise Payment Request</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
