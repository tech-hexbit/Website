import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// MicroInteraction
import { Alert } from "./../../MicroInteraction/Alert";

// css
import DCss from "./Css/Des.module.css";

export default function UpdateLabel(props) {
  return (
    <div>
      <span className={DCss.desName}>{props.crrValue}</span>
      <span className={DCss.editBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-pencil"
        >
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      </span>
    </div>
  );
}
