import React, { useState, useEffect } from "react";

// components
import Header from "./MainParts/Header";
import PastTicket from "./HelpDesk/PastTicket";
import HelpDeskForm from "./HelpDesk/HelpDeskForm";
import QuickInquiries from "./HelpDesk/QuickInquiries";
import HelpDeskFormTicket from "./HelpDesk/HelpDeskFormTicket";

// css
import hd from "./HelpDesk/Css/HelpDesk.module.css";

export default function HelpDesk() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header name="Contact Us" />

      {!submitted ? (
        <>
          <p className={hd.para}>
            Just answer a few questions, Helping us answer your queries better.
            We will surely revert within 48 hrs.
          </p>
        </>
      ) : null}
      <div className={hd.main}>
        <>
          {submitted ? (
            <HelpDeskFormTicket setSubmitted={setSubmitted} />
          ) : (
            <HelpDeskForm setSubmitted={setSubmitted} />
          )}
        </>
        <div className={hd.submain}>
          <QuickInquiries />
          <PastTicket />
        </div>
      </div>
    </>
  );
}
