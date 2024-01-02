import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// css
import hdft from "./Css/HelpDeskFormTicket.module.css";

export default function HelpDeskFormTicket(props) {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={hdft.main}>
        <div className={hdft.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="212"
            height="212"
            viewBox="0 0 212 212"
            fill="none"
          >
            <path
              d="M105.732 17.623C57.1841 17.623 17.623 57.1841 17.623 105.732C17.623 154.28 57.1841 193.841 105.732 193.841C154.28 193.841 193.841 154.28 193.841 105.732C193.841 57.1841 154.28 17.623 105.732 17.623ZM147.848 85.4671L97.8905 135.425C96.657 136.659 94.9829 137.363 93.2207 137.363C91.4585 137.363 89.7845 136.659 88.5509 135.425L63.616 110.49C61.0609 107.935 61.0609 103.706 63.616 101.151C66.1712 98.5954 70.4004 98.5954 72.9556 101.151L93.2207 121.416L138.509 76.1276C141.064 73.5724 145.293 73.5724 147.848 76.1276C150.404 78.6827 150.404 82.8238 147.848 85.4671Z"
              fill="#23A26D"
            />
          </svg>
        </div>

        <div className={hdft.content}>
          <p>Request Raised !!</p>
          <p>Ticket ID : HX001</p>
          <p>For More Details Visit Support Details Page</p>
        </div>

        <div className={hdft.buttons}>
          <button>Details</button>
          <button
            onClick={() => {
              props.setSubmitted(false);
            }}
          >
            New Request
          </button>
        </div>

        <Link to="/me/help/desk/ViewMore">
          <button className={hdft.ticket}>Ticket Status</button>
        </Link>
      </div>
    </>
  );
}
