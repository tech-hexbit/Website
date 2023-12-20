import React from "react";

// css
import SupCss from "./Css/Support.module.css";

export default function QA(props) {
  return (
    <div className={SupCss.quesboxes}>
      {props.data.map((val) => {
        return (
          <div className={SupCss.quepart}>
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
              class="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <h4 style={{ color: "#53686A" }}>{val.question}</h4>
            <p>{val.answer}</p>
          </div>
        );
      })}
    </div>
  );
}
