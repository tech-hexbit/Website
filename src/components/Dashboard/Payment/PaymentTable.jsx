import React, { useState, useEffect, useContext } from "react";

// MicroInteraction
import Load from "./../../../MicroInteraction/Load";
import { Alert } from "./../../../MicroInteraction/Alert";

// axios
import axios from "axios";

// state
import AuthContext from "../../../store/auth-context";

// css
import pt from "./Css/PaymentTable.module.css";

export default function PaymentTable() {
  const [load, setLoad] = useState(false);
  const [showData, setData] = useState([]);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

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

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/common/Payment/OrderList", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setData(response.data.data);

        setLoad(false);
      } else {
        setLoad(false);

        console.log(e);
      }
    } catch (e) {
      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });

      console.log(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log(showData);
  }, [showData]);

  return (
    <>
      <div className={pt.main}>
        <h3>Transactions</h3>

        {load ? (
          <div className="loadCenterDiv">
            <Load />
          </div>
        ) : (
          <>
            {showData ? (
              <>
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

                  {showData.map((val, key) => (
                    <tr key={key}>
                      <td data-cell="tracking Id">{val.trackingId}</td>
                      <td data-cell="order id">{val.product}</td>
                      <td data-cell="name">{val.customer}</td>
                      <td data-cell="date">{val.date}</td>
                      <td data-cell="amount">{val.amount.toFixed(2)}</td>
                      <td data-cell="payment mode">{val.paymentMode}</td>
                      <td
                        className={
                          val.status === "Delivered & Eligible"
                            ? pt.processed
                            : val.status === "Delivered"
                            ? pt.pending
                            : pt.rejected
                        }
                        data-cell="status"
                      >
                        {val.status}
                      </td>
                      <td data-cell="action">
                        <label className={pt.labelDiv}>
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
              </>
            ) : (
              <div className="loadCenterDiv" id="loadPadding">
                No Orders
              </div>
            )}
          </>
        )}
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
