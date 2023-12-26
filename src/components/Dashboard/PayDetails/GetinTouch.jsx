import React from "react";

// css
import ggit from "./Css/GetinTouch.module.css";

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
        <button>Get in Touch</button>
      </div>
    </div>
  );
}
