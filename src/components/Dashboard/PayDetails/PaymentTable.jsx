import React, { useState } from "react";

// components
import PaymentDetailsOverlay from "./PaymentDetailsOverlay";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import Gptable from "./Css/PaymentTable.module.css";

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
                   <tr key={index} className={Gptable.payRes}>
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
                     <tr key={index} className={Gptable.payRes}>
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