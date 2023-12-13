import React from "react";

// css
import SDCss from "./Css/SellersDetails.module.css";

export default function SellersDetails(props) {
  return (
    <div className={SDCss.mDiv}>
      <div className={SDCss.titleDiv}>
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
          class="lucide lucide-move-left"
          className={SDCss.leftArrow}
          onClick={() => {
            props.hide(false);
          }}
        >
          <path d="M6 8L2 12L6 16" />
          <path d="M2 12H22" />
        </svg>
        SellersDetails
      </div>

      <div className={SDCss.infoDiv}>
        <p>
          <b>Info</b>
        </p>

        <div>
          <p>
            Name: <span>{props.show.val}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
