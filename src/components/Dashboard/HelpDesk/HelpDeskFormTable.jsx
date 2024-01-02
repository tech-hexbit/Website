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
      <h1>Contact us</h1>

      <div className={hdftable.submain}>
        <h3>Tickets</h3>
        <table className={hdftable.trans_table}>
          <tr>
            <th>Ticket ID</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Status</th>
          </tr>

          {data.map((item, key) => (
            <tr key={key}>
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
