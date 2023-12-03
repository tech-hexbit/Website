import React from "react";

// css
import AQCss from "./Css/AddQuestion.module.css";

export default function AddQuestiom(props) {
  return (
    <div>
      <p>Add Question(s)</p>

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
        class="lucide lucide-x"
        onClick={() => {
          props.setAdd(false);
        }}
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </div>
  );
}
