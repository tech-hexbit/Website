import React from "react";

// css
import styles from "./Css/ContactForm.module.css";

export default function Pointers(props) {
  return (
    <div className={styles.pointers}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-arrow-right"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
      <p>{props.label}</p>
    </div>
  );
}
