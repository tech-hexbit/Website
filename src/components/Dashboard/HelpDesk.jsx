import React, { useState, useEffect } from "react";

// components
import PastTicket from "./HelpDesk/PastTicket";
import HelpDeskForm from "./HelpDesk/HelpDeskForm";
import QuickInquiries from "./HelpDesk/QuickInquiries";
import HelpDeskFormTicket from "./HelpDesk/HelpDeskFormTicket";

// css
import hd from "./HelpDesk/Css/HelpDesk.module.css";

export default function HelpDesk() {
  const [submitted, setSubmitted] = useState(false);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <>
          <h1 className={hd.heading}>Contact Us</h1>
          <p className={hd.para}>
            Just answer a few questions, Helping us answer your queries better.
            We will surely revert within 48 hrs.
          </p>
        </>
      ) : null}
      <div className={hd.main}>
        {!submitted ? (
          <HelpDeskForm onFormSubmit={handleFormSubmit} />
        ) : (
          <HelpDeskFormTicket />
        )}
        <div className={hd.submain}>
          <QuickInquiries />
          <PastTicket />
        </div>
      </div>
    </>
  );
}
