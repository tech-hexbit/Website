import React from "react";
import { Link } from "react-router-dom";

// css
import pt from "./Css/PastTicket.module.css";

export default function PastTicket() {
  return (
    <div className={pt.main}>
      <h1>Past Ticket</h1>
      <div className={pt.grid}>
        <div className={pt.child}>#HX00001</div>
        <div className={`${pt.child} ${pt.orange}`}>Pending</div>
        <div className={pt.child}>#HX00002</div>
        <div className={`${pt.child} ${pt.green}`}>Solved</div>
        <div className={pt.child}>#HX00003</div>
        <div className={`${pt.child} ${pt.green}`}>Solved</div>
        <div className={pt.child}>#HX00004</div>
        <div className={`${pt.child} ${pt.green}`}>Solved</div>
        <Link to="/me/help/desk/ViewMore" className={pt.btn}>
          View More
        </Link>
      </div>
    </div>
  );
}
