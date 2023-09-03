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
  const [orderDel, setOrderDel] = useState({
    id: "",
    name: "",
    amount: 0,
    quantity: 0,
    Status: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {};

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
            {data.map((element, i) => {
              return (
                <tr key={i}>
                  <td id={RCss.td}>{element.col1}</td>
                  <td id={RCss.td} className={RCss.product}>
                    {element.col2}
                  </td>
                  <td id={RCss.td}>{element.col3}</td>
                  <td id={RCss.td} className={RCss.quantity}>
                    {element.col4}
                  </td>
                  {element.col5 == "Delivered" && (
                    <td id={RCss.td} style={{ color: "#4BB543" }}>
                      {element.col5}
                    </td>
                  )}
                  {element.col5 == "Pending" && (
                    <td id={RCss.td} style={{ color: "#3F81E0" }}>
                      {element.col5}
                    </td>
                  )}
                  {element.col5 == "Cancelled" && (
                    <td id={RCss.td} style={{ color: "#D0342C" }}>
                      {element.col5}
                    </td>
                  )}
                </tr>
              );
            })}
          </table>
          <div className={RCss.bottom}>
            <div className={RCss.show}>
              Showing <b>5</b> of <b>25</b> results
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
