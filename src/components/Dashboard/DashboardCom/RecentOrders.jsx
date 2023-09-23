import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "./../../../store/auth-context";

// components
import BarChart from "./charts/BarChart";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import RCss from "./css/recentOrders.module.css";

export default function RecentOrders() {
  const [orderNumber, setOrderNumber] = useState(0);
  const [orderDel, setOrderDel] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/website/DashBoard/OrderList", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setOrderDel(response.data.orders);
        setOrderNumber(response.data.orders?.length);

        setLoad(false);
      } else {
        setLoad(false);

        console.log(e);
      }
    } catch (e) {
      setLoad(false);

      console.log(e);
    }
  };

  return (
    <div className={RCss.mainDiv}>
      <div className={RCss.heading}>Recent orders</div>

      <div className={RCss.middle}>
        {load ? (
          <div className="loadCenterDiv">
            <Load />
          </div>
        ) : (
          <>
            {orderDel?.length > 0 ? (
              <>
                <div className={RCss.table}>
                  <table className={RCss.tableTag}>
                    <tr>
                      <th id={RCss.th}>Order ID</th>
                      <th id={RCss.th} className={RCss.product}>
                        Product
                      </th>
                      <th id={RCss.th}>Amount</th>
                      <th id={RCss.th} className={RCss.quantity}>
                        Quantity
                      </th>
                      <th id={RCss.th}>Status</th>
                    </tr>
                    {orderDel ? (
                      <>
                        {orderDel.map((val, key) => {
                          return (
                            <tr key={key}>
                              <td id={RCss.td} class={RCss.truncate}>
                                {val._id.slice(-4)}
                              </td>
                              <td id={RCss.td} className={RCss.product}>
                                {val.Items[0].ItemID.descriptor.name}
                              </td>
                              <td id={RCss.td}>₹ {val.amount}</td>
                              <td id={RCss.td} className={RCss.quantity}>
                                {val.Items[0].quantity}
                              </td>
                              {val.Status == "Delivered" && (
                                <td id={RCss.td} style={{ color: "#4BB543" }}>
                                  {val.Status}
                                </td>
                              )}
                              {val.Status == "Pending" && (
                                <td id={RCss.td} style={{ color: "#3F81E0" }}>
                                  {val.Status}
                                </td>
                              )}
                              {val.Status == "Cancelled" && (
                                <td id={RCss.td} style={{ color: "#D0342C" }}>
                                  {val.Status}
                                </td>
                              )}
                            </tr>
                          );
                        })}
                      </>
                    ) : (
                      "No Data"
                    )}
                  </table>

                  <div className={RCss.bottom}>
                    <div className={RCss.show}>
                      Showing
                      {orderNumber <= 5 ? <b> {orderNumber} </b> : <b>5</b>}
                      of <b>{orderNumber}</b> results
                    </div>
                    <div className={RCss.view}>View all</div>
                  </div>

                  <div className={RCss.costHeading}>
                    Costs
                    <BarChart />
                  </div>
                </div>
              </>
            ) : (
              <p className={RCss.NoOrders}>No Orders</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
