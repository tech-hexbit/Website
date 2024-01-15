import React from "react";
import PropTypes from "prop-types";

// css
import Acss from "./Css/FrontPage.module.css";

export default function ListBox({ title, label }) {
  return (
    <div className={Acss.card}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-book-user"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        <circle cx="12" cy="8" r="2" />
        <path d="M15 13a3 3 0 1 0-6 0" />
      </svg>
      <h3 className={Acss.a1}>{title}</h3>
      <p className={Acss.a2}>{label}</p>
    </div>
  );
}

ListBox.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
