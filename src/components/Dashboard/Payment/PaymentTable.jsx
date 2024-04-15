import React, { useState, useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";

// component
import UploadFile from "./UploadFile";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// axios
import axios from "axios";

// state
import AuthContext from "../../../store/auth-context";

// css
import pt from "./Css/PaymentTable.module.css";

export default function PaymentTable({
  setSel,
  setList,
  imageUpload,
  setImageUpload,
  loadDataSave,
}) {
  const [load, setLoad] = useState(false);
  const [showData, setData] = useState([]);
  const [IDLocal, setID] = useState([]);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/common/Payment/OrderList", {
        headers: { Authorization: `${authCtx.token}` },
      });

      console.log(response.data.listData);

      if (response.data.success) {
        setData(response.data.data);

        setList(response.data.listData);
        setID([]);

        setLoad(false);
      } else {
        setLoad(false);

        console.log(e);
      }
    } catch (e) {
      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
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
                            <>
                              <UploadFile
                                setSel={setSel}
                                val={val}
                                setImageUpload={setImageUpload}
                                setID={setID}
                                IDLocal={IDLocal}
                              />
                            </>
                          )}
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
    </>
  );
}

PaymentTable.propTypes = {
  setSel: PropTypes.func.isRequired,
};
