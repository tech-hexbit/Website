import React, { useState } from "react";

// components
import PaymentDetailsOverlay from "./PaymentDetailsOverlay";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import Gptable from "./Css/PaymentTable.module.css";
import cardDisplay from "./Css/PaymentCard.module.css";

export default function PaymentTable({ load, showData }) {
  const [showOverlay, setShowOverlay] = useState(false);

  const [selectedItem, setSelectedItem] = useState([]);

  const handleOverlay = (refNo) => {
    setShowOverlay(!showOverlay);
    setSelectedItem(refNo);
  };

  const closeOverlay = () => {
    setSelectedItem(null);
    setShowOverlay(showOverlay);
  };

  const filteredRowItem = showData.filter((item) => item._id === selectedItem);

  return (
    <div className={Gptable.main}>
      <h4>Transactions</h4>

      {load ? (
        <div className="loadCenterDiv">
          <Load />
        </div>
      ) : (
        <>
          {showOverlay ? (
            <>
              <table className={Gptable.trans_table}>
                <tr>
                  <th>Ref. No.</th>
                  <th>A/c Holder Name</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Order Id</th>
                  <th>Payment Mode</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

                {/* display selected row */}
                {filteredRowItem.map((item, index) => (
                  <tr key={index}>
                    <td data-cell="ref no">{item._id.slice(-4)}</td>
                    <td data-cell="name">
                      {item.bank.BankDetails[0].AccountHolderName}
                    </td>
                    <td data-cell="date">{item.when.date}</td>
                    <td data-cell="amount">₹ {item.totalAmount.toFixed(2)}</td>
                    <td data-cell="order id">
                      [{" "}
                      {item.order.map((val, key) => {
                        const lastFourChars = val.orderID._id.slice(-4);
                        return key === item.order.length - 1
                          ? lastFourChars
                          : `${lastFourChars}, `;
                      })}{" "}
                      ]
                    </td>
                    <td data-cell="payment mode">
                      [{" "}
                      {item.order.map((val, key) => {
                        const lastFourChars = val.orderID.payment.status;
                        return key === item.order.length - 1
                          ? lastFourChars
                          : `${lastFourChars}, `;
                      })}{" "}
                      ]
                    </td>
                    <td
                      className={
                        item.status === "Payment Processed"
                          ? Gptable.processed
                          : item.status === "Payment Pending"
                          ? Gptable.pending
                          : Gptable.rejected
                      }
                      data-cell="status"
                    >
                      {item.status}
                    </td>
                    <td
                      data-cell="action"
                      onClick={() => handleOverlay(item.refNo)}
                    >
                      Close Details
                    </td>
                  </tr>
                ))}
              </table>
              <>
              <div className={cardDisplay.cardMain}>
                      {filteredRowItem.map((item, index) => {
                        return (
                          <div className={cardDisplay.card}>
                            <div
                            >
                              <div className={cardDisplay.cardcontent}>
                                <p className={cardDisplay.cardText}>Ref.No:</p>
                                <p className={cardDisplay.cardTextSecond}>
                                {item._id.slice(-4)}
                                </p>
                              </div>
                              <div className={cardDisplay.cardcontent}>
                                <p className={cardDisplay.cardText}>Order Id:</p>
                                <p className={cardDisplay.cardTextSecond}>
                                [{" "}
                                  {item.order.map((val, key) => {
                                    const lastFourChars = val.orderID.payment.status;
                                    return key === item.order.length - 1
                                      ? lastFourChars
                                      : `${lastFourChars}, `;
                                  })}{" "}
                                  ]
                                </p>
                              </div>
                              <div className={cardDisplay.cardcontent}>
                                <p className={cardDisplay.cardText}>A/c Holder Name:</p>
                                <p className={cardDisplay.cardTextSecond}>
                                {item.bank.BankDetails[0].AccountHolderName}
                                </p>
                              </div>
                              <div className={cardDisplay.cardcontent}>
                                <p className={cardDisplay.cardText}>Date:</p>
                                <p className={cardDisplay.cardTextSecond}>
                                  {item.date}
                                </p>
                              </div>
                              <div className={cardDisplay.cardcontent}>
                                <p className={cardDisplay.cardText}>
                                  Amount:
                                </p>
                                <p className={cardDisplay.cardTextSecond}>
                                ₹ {item.totalAmount.toFixed(2)}
                                </p>
                              </div>
                              <div className={cardDisplay.cardcontent}>
                                <p className={cardDisplay.cardText}>
                                  Payment Mode:
                                </p>
                                <p className={cardDisplay.cardTextSecond}>
                                  {item.paymentMode}
                                </p>
                              </div>
                              <div 
                              className={`${cardDisplay.cardcontent} ${
                                item.status === "Payment Processed"
                                  ? Gptable.processed
                                  : item.status === "Payment Pending"
                                  ? Gptable.pending
                                  : Gptable.rejected
                            }`}
                              >
                                <p 
                                className={cardDisplay.cardText}
                                >
                                  Status:
                                </p>
                                <p 
                                className={cardDisplay.cardTextSecond}
                                >
                                  {item.status}
                                </p>
                              </div>
                              <div className={cardDisplay.cardcontent}>
                                <p className={cardDisplay.cardText}>
                                  Action:
                                </p>
                                <p className={cardDisplay.cardTextSecond}
                                   onClick={() => handleOverlay(item.refNo)}
                                >
                                  Close Details
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
              </>
            </>
          ) : (
            // entire table data
            <>
            <table className={Gptable.trans_table}>
              <tr>
                <th>Ref. No.</th>
                <th>A/c Holder Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Order Id</th>
                <th>Payment Mode</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

              {showData.length > 0 ? (
                <>
                  {showData.map((item, index) => (
                    <tr key={index}>
                      <td data-cell="ref no">{item._id.slice(-4)}</td>
                      <td data-cell="name">
                        {item.bank.BankDetails[0].AccountHolderName}
                      </td>
                      <td data-cell="date">{item.when.date}</td>
                      <td data-cell="amount">
                        ₹ {item.totalAmount.toFixed(2)}
                      </td>
                      <td data-cell="order id">
                        [{" "}
                        {item.order.map((val, key) => {
                          const lastFourChars = val.orderID._id.slice(-4);
                          return key === item.order.length - 1
                            ? lastFourChars
                            : `${lastFourChars}, `;
                        })}{" "}
                        ]
                      </td>
                      <td data-cell="payment mode">
                        [{" "}
                        {item.order.map((val, key) => {
                          const lastFourChars = val.orderID.payment.status;
                          return key === item.order.length - 1
                            ? lastFourChars
                            : `${lastFourChars}, `;
                        })}{" "}
                        ]
                      </td>
                      <td
                        className={
                          item.status === "Payment Processed"
                            ? Gptable.processed
                            : item.status === "Payment Pending"
                            ? Gptable.pending
                            : Gptable.rejected
                        }
                        data-cell="status"
                      >
                        {item.status}
                      </td>
                      <td
                        data-cell="action"
                        onClick={() => handleOverlay(item._id)}
                      >
                        View Details
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <div className="loadCenterDiv" id="loadPadding">
                  No Orders
                </div>
              )}
            </table>
            <>
              <div className={cardDisplay.cardMain}>
                {showData.map((item, index) => {
                  return (
                    <div className={cardDisplay.card}>
                      <div
                      >
                        <div className={cardDisplay.cardcontent}>
                          <p className={cardDisplay.cardText}>Ref.No:</p>
                          <p className={cardDisplay.cardTextSecond}>
                          {item._id.slice(-4)}
                          </p>
                        </div>
                        <div className={cardDisplay.cardcontent}>
                          <p className={cardDisplay.cardText}>Order Id:</p>
                          <p className={cardDisplay.cardTextSecond}>
                          [{" "}
                            {item.order.map((val, key) => {
                              const lastFourChars = val.orderID.payment.status;
                              return key === item.order.length - 1
                                ? lastFourChars
                                : `${lastFourChars}, `;
                            })}{" "}
                            ]
                          </p>
                        </div>
                        <div className={cardDisplay.cardcontent}>
                          <p className={cardDisplay.cardText}>A/c Holder Name:</p>
                          <p className={cardDisplay.cardTextSecond}>
                          {item.bank.BankDetails[0].AccountHolderName}
                          </p>
                        </div>
                        <div className={cardDisplay.cardcontent}>
                          <p className={cardDisplay.cardText}>Date:</p>
                          <p className={cardDisplay.cardTextSecond}>
                            {item.date}
                          </p>
                        </div>
                        <div className={cardDisplay.cardcontent}>
                          <p className={cardDisplay.cardText}>
                            Amount:
                          </p>
                          <p className={cardDisplay.cardTextSecond}>
                          ₹ {item.totalAmount.toFixed(2)}
                          </p>
                        </div>
                        <div className={cardDisplay.cardcontent}>
                          <p className={cardDisplay.cardText}>
                            Payment Mode:
                          </p>
                          <p className={cardDisplay.cardTextSecond}>
                            {item.paymentMode}
                          </p>
                        </div>
                        <div 
                        className={`${cardDisplay.cardcontent} ${
                          item.status === "Payment Processed"
                            ? Gptable.processed
                            : item.status === "Payment Pending"
                            ? Gptable.pending
                            : Gptable.rejected
                      }`}
                        >
                          <p 
                          className={cardDisplay.cardText}
                          >
                            Status:
                          </p>
                          <p 
                          className={cardDisplay.cardTextSecond}
                          >
                            {item.status}
                          </p>
                        </div>
                        <div className={cardDisplay.cardcontent}>
                          <p className={cardDisplay.cardText}>
                            Action:
                          </p>
                          <p className={cardDisplay.cardTextSecond}
                              onClick={() => handleOverlay(item._id)}
                          >
                            View Details
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
            </>
          )}
        </>
      )}

      {/* Payment overlay */}
      {showOverlay && (
        <PaymentDetailsOverlay
          selectedItem={filteredRowItem}
          closeOverlay={closeOverlay}
        />
      )}
    </div>
  );
}