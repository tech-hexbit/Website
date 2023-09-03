import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "./../../../store/auth-context";

// css
import RCss from "./css/recentOrders.module.css";

// components
import BarChart from "./charts/BarChart";

const data = [
  {
    col1: "#718821",
    col2: "Nike shoes",
    col3: "₹ 2,779",
    col4: "1",
    col5: "Delivered",
  },
  {
    col1: "#546172",
    col2: "Nike shoes",
    col3: "₹ 12,779",
    col4: "2",
    col5: "Pending",
  },
  {
    col1: "#22341",
    col2: "Heels",
    col3: "₹ 3,999",
    col4: "1",
    col5: "Delivered",
  },
  {
    col1: "#718821",
    col2: "Nike shoes",
    col3: "₹ 2,779",
    col4: "1",
    col5: "Delivered",
  },
  {
    col1: "#718821",
    col2: "Office chair",
    col3: "₹ 10,769",
    col4: "1",
    col5: "Cancelled",
  },
];

export default function RecentOrders() {
  const [orderDel, setOrderDel] = useState([]);
  const [orderNumber, setOrderNumber] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    try {
      const response = await axios.get("/api/website/DashBoard/OrderList", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setOrderDel(response.data.orders);
        setOrderNumber(response.data.orders?.length);
      } else {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(orderDel);
  }, [orderDel]);

  return (
    <div className={RCss.mainDiv}>
      <div className={RCss.heading}>Recent orders</div>
      <div className={RCss.middle}>
        <div className={RCss.table}>
          <table style={{ borderCollapse: "collapse" }}>
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
                      <td id={RCss.td}>{val._id}</td>
                      <td id={RCss.td} className={RCss.product}>
                        {val.Items[0].ItemID.descriptor.name}
                      </td>
                      <td id={RCss.td}>{val.amount}</td>
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
        </div>
        <div className={RCss.costHeading}>
          Costs
          <BarChart />
        </div>
      </div>
    </div>
  );
}
