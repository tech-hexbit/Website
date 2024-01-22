import React from "react";
import { Link } from "react-router-dom";

// css
import ggit from "./Css/GetinTouch.module.css";
import PaymentList from "../../Dashboard/PayDetails/PaymentList";

export default function GetinTouch() {
  return (
  
    <div className={ggit.main}>
        
      <div className={ggit.content}>
        <p>Still have questions?</p>
        <p>
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
      </div>
      <div className={ggit.content}>
        <Link to="/me/help/desk" className="LinkStyle">
          <button>Get in Touch</button>
        </Link>
      </div>
    </div>
  );
}
