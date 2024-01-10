import React from "react";

// css
import pr from "./Css/PaymentRequest.module.css";

export default function SelectedBlock() {
  return (
    <>
      <div className={pr.detailsRight}>
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
          <span>Selected</span>
        </p>
        <div className={pr.flex}>
          <div className={pr.flexItem}>
            <h4>Total Selected</h4>
            <h1>1</h1>
          </div>
          <div className={pr.flexItem}>
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
        <div className={pr.flexItem}>
          <button>Raise Payment Request</button>
        </div>
      </div>
    </>
  );
}
