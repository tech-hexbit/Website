import { useState } from "react";
// components
import HelpDeskForm from "./HelpDesk/HelpDeskForm";
import PastTicket from "./HelpDesk/PastTicket";
import QuickInquiries from "./HelpDesk/QuickInquiries";
import HelpDeskFormTicket from "./HelpDesk/HelpDeskFormTicket";
// css
import hd from "../Dashboard/HelpDesk/Css/HelpDesk.module.css";
const HelpDesk = () => {
  const [submitted, setSubmitted] = useState(false);

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
};

export default HelpDesk;
