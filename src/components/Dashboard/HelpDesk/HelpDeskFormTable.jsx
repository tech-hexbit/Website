import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// components
import MoreInquiries from "./MoreInquiries";
import HelpDeskContent from "./HelpDeskContent";

// css
import hdftable from "./Css/HelpDeskFormTable.module.css";

export default function HelpDeskFormTable() {
  // dummy data
  const data = [
    {
      trackingId: "#20462",
      product: "Hat",
      customer: "Matt Dickerson",
      date: "13/05/2022",
      amount: "₹366.16",
      paymentMode: "Not Paid",
      status: "Solved",
    },
    {
      trackingId: "#18933",
      product: "Laptop",
      customer: "Wiktoria",
      date: "22/05/2022",
      amount: "₹366.16",
      paymentMode: "Paid",
      status: "Delivered & Eligible",
    },
    {
      trackingId: "#45169",
      product: "Phone",
      customer: "Trixie Byrd",
      date: "15/06/2022",
      amount: "₹366.16",
      paymentMode: "Not Paid",
      status: "Pending",
    },
    {
      trackingId: "#34304",
      product: "Bag",
      customer: "Brad Mason",
      date: "06/09/2022",
      amount: "₹366.16",
      paymentMode: "Paid",
      status: "Pending",
    },
  ];

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={hdftable.main}>
      <h1>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="48"
          viewBox="0 0 28 48"
          fill="none"
        >
          <path
            d="M26.5504 1.47734C25.3254 0.252344 23.3504 0.252344 22.1254 1.47734L1.35039 22.2523C0.375391 23.2273 0.375391 24.8023 1.35039 25.7773L22.1254 46.5523C23.3504 47.7774 25.3254 47.7774 26.5504 46.5523C27.7754 45.3274 27.7754 43.3523 26.5504 42.1273L8.45039 24.0023L26.5754 5.87734C27.7754 4.67734 27.7754 2.67734 26.5504 1.47734Z"
            fill="black"
          />
        </svg> */}
        Contact us
      </h1>

      <div className={hdftable.submain}>
        <h3>Tickets</h3>
        <table className={hdftable.trans_table}>
          <tr>
            <th>Ticket ID</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Status</th>
          </tr>

          {data.map((item, index) => (
            <tr key={index}>
              <td data-cell="ticket Id">{item.trackingId}</td>
              <td data-cell="subject">{item.product}</td>
              <td data-cell="date">{item.date}</td>
              <td
                className={
                  item.status === "Delivered & Eligible" ||
                  item.status === "Solved"
                    ? hdftable.processed
                    : hdftable.pending
                }
                data-cell="status"
              >
                {item.status}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className={hdftable.wrapper}>
        <MoreInquiries />
        <HelpDeskContent />
      </div>

      <Link to="/me/help/desk" className={hdftable.newrequest}>
        <>New Request</>
      </Link>
    </div>
  );
}
