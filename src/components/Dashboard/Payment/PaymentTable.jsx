import React from "react";

// css
import pt from "./Css/PaymentTable.module.css";

export default function PaymentTable() {
  // dema data t be deleted
  const data = [
    {
      trackingId: "#20462",
      product: "Hat",
      customer: "Matt Dickerson",
      date: "13/05/2022",
      amount: "₹366.16",
      paymentMode: "Not Paid",
      status: "Delivered & Eligible",
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
      status: "Delivered",
    },
    {
      trackingId: "#34304",
      product: "Bag",
      customer: "Brad Mason",
      date: "06/09/2022",
      amount: "₹366.16",
      paymentMode: "Paid",
      status: "Delivered",
    },
  ];

  return (
    <div className={pt.main}>
      <h3>Transactions</h3>
      <table className={pt.trans_table}>
        <tr>
          <th>Tracking ID</th>
          <th>Product</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Payment Mode</th>
          <th>Status</th>
          <th>Action</th>
        </tr>

        {data.map((item, index) => (
          <tr key={index}>
            <td data-cell="tracking Id">{item.trackingId}</td>
            <td data-cell="order id">{item.product}</td>
            <td data-cell="name">{item.customer}</td>
            <td data-cell="date">{item.date}</td>
            <td data-cell="amount">{item.amount}</td>
            <td data-cell="payment mode">{item.paymentMode}</td>
            <td
              className={
                item.status === "Delivered & Eligible"
                  ? pt.processed
                  : item.status === "Delivered"
                  ? pt.pending
                  : pt.rejected
              }
              data-cell="status"
            >
              {item.status}
            </td>
            <td data-cell="action">
              <label>
                <input type="checkbox" className={pt.CheckBoxInp} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={pt.lucide}
                >
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m16 16-4-4-4 4" />
                </svg>
              </label>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
