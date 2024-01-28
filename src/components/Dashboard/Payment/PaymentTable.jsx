import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";
import { Alert } from "./../../../MicroInteraction/Alert";

// axios
import axios from "axios";

// state
import AuthContext from "../../../store/auth-context";

// css
import pt from "./Css/PaymentTable.module.css";
import cardDisplay from "./Css/PaymentCard.module.css";

export default function PaymentTable({ setSel, loadDataSave }) {
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
  }, [, loadDataSave]);

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
            {showData.length > 0 ? (
              <>
              <>
                <table className={pt.trans_table}>
                  <tr>
                    <th>Tracking ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment Mode</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>

                  {showData.map((val, key) => (
                    <tr key={key} className={pt.payRes}>
                      <td data-cell="tracking Id">#{val._id.slice(-4)}</td>
                      <td data-cell="name">{val.ONDCBilling.name}</td>
                      <td data-cell="date">{val.when.date}</td>
                      <td data-cell="amount">₹ {val.amount.toFixed(2)}</td>
                      <td data-cell="payment mode">{val.payment.status}</td>
                      <td
                        className={
                          val.action === "Delivered & Eligible"
                            ? pt.processed
                            : val.action === "Delivered"
                            ? pt.pending
                            : pt.rejected
                        }
                        data-cell="status"
                      >
                        {val.action}
                      </td>
                      <td data-cell="action">
                        <label className={pt.labelDiv}>
                          {val.action === "Delivered & Eligible" && (
                            <input
                              type="checkbox"
                              className={pt.CheckBoxInp}
                              onChange={(e) => {
                                setSel((prevShowSel) => ({
                                  ...prevShowSel,
                                  total: e.target.checked
                                    ? prevShowSel.total + 1
                                    : prevShowSel.total - 1,
                                  amount: e.target.checked
                                    ? prevShowSel.amount + val.amount
                                    : prevShowSel.amount - val.amount,
                                  order: e.target.checked
                                    ? Array.isArray(prevShowSel.order)
                                      ? [...prevShowSel.order, val._id]
                                      : [val._id]
                                    : prevShowSel.order.filter(
                                        (order) => order !== val._id
                                      ),
                                }));
                              }}
                            />
                          )}

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
                {/* Card */}
                <div className={cardDisplay.cardMain}>
                {showData.map((val, key) => {
                  return (
                    <div className={cardDisplay.card}>
                      <div
                      >
                        <div className={cardDisplay.cardcontent}>
                          <p className={cardDisplay.cardText}>Tracking Id</p>
                          <p className={cardDisplay.cardTextSecond}>
                          #{val._id.slice(-4)}
                          </p>
                        </div>
                        <div className={cardDisplay.cardcontent}>
                          <p className={cardDisplay.cardText}>Customer</p>
                          <p className={cardDisplay.cardTextSecond}>
                          {val.ONDCBilling.name}
                          </p>
                        </div>
                        <div className={cardDisplay.cardcontent}>
                          <p className={cardDisplay.cardText}>Date</p>
                          <p className={cardDisplay.cardTextSecond}>
                          {val.when.date}
                          </p>
                        </div>
                        <div className={cardDisplay.cardcontent}>
                          <p className={cardDisplay.cardText}>Amount:</p>
                          <p className={cardDisplay.cardTextSecond}>
                          ₹ {val.amount.toFixed(2)}
                          </p>
                        </div>
                        <div className={cardDisplay.cardcontent}>
                          <p className={cardDisplay.cardText}>
                          Payment Mode:
                          </p>
                          <p className={cardDisplay.cardTextSecond}>
                          {val.payment.status}
                          </p>
                        </div>
                        <div 
                        className={`${cardDisplay.cardcontent} ${
                          val.action === "Delivered & Eligible"
                          ? pt.processed
                          : val.action === "Delivered"
                          ? pt.pending
                          : pt.rejected
                      }`}
                        >
                          <p 
                          className={cardDisplay.status}
                          >
                            {val.action}
                          </p>
                        </div>
                        <div className={cardDisplay.actionMain}>
                          <p className={cardDisplay.cardText}>
                            Action:
                          </p>
                          <p className={cardDisplay.action}
                          >
                           <>
                            {val.action === "Delivered & Eligible" && (
                              <input
                                type="checkbox"
                                className={pt.CheckBoxInp}
                                onChange={(e) => {
                                  setSel((prevShowSel) => ({
                                    ...prevShowSel,
                                    total: e.target.checked
                                      ? prevShowSel.total + 1
                                      : prevShowSel.total - 1,
                                    amount: e.target.checked
                                      ? prevShowSel.amount + val.amount
                                      : prevShowSel.amount - val.amount,
                                    order: e.target.checked
                                      ? Array.isArray(prevShowSel.order)
                                        ? [...prevShowSel.order, val._id]
                                        : [val._id]
                                      : prevShowSel.order.filter(
                                          (order) => order !== val._id
                                        ),
                                  }));
                                }}
                              />
                            )}
                           </>
                           <>
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
                           </>
                          
                        {/* </label> */}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
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

PaymentTable.propTypes = {
  setSel: PropTypes.func.isRequired,
};
