import React from "react";
import { Link } from "react-router-dom";

// components
import QA from "./QA";

// css
import SupCss from "./Css/Support.module.css";

export default function Support() {
  return (
    <div>
      <p>FAQs</p>

      <div className={SupCss.qamDiv}>
        <QA />
        <QA />
        <QA />
        <QA />
        <QA />
      </div>

      <div>
        <p className={SupCss.queriesPTag}>
          For additonal Queries you can{" "}
          <Link to="/contact">
            <u>contract us</u>
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
