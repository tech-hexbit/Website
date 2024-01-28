import React from "react";
import osCss from "../Css/overallSales.module.css";

const Buttons = (props) => {
  return (
    <div className={osCss.cenDiv}>
      <button
        onClick={() => props.setCurrentPage(props.currentPage - 1)}
        disabled={props.currentPage === 1}
        className={osCss.btnnb}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevrons-left"
        >
          <path d="m11 17-5-5 5-5" />
          <path d="m18 17-5-5 5-5" />
        </svg>
      </button>
      <span>{props.currentPage}</span>
      <button
        onClick={() => props.setCurrentPage(props.currentPage + 1)}
        disabled={props.max}
        className={osCss.btnnb}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevrons-right"
        >
          <path d="m6 17 5-5-5-5" />
          <path d="m13 17 5-5-5-5" />
        </svg>
      </button>
    </div>
  );
};
export default Buttons;
