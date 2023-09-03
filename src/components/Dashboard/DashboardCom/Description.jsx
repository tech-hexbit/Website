import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// components
import DesCard from "./DesCard";

// state
import AuthContext from "./../../../store/auth-context";

// css
import DCss from "./css/dashboard.module.css";

const data = [
  {
    cardHeading: "Total orders",
    cardValue: "36,778",
    changeInValue: "+5.21%",
    arrow: "increase",
  },
  {
    cardHeading: "Total Earnings",
    cardValue: "₹ 96,778",
    changeInValue: "-3.89%",
    arrow: `decrease`,
  },
  {
    cardHeading: "New customers",
    cardValue: "36,778",
    changeInValue: "+11.1%",
    arrow: `increase`,
  },
];

export default function Description() {
  const [orderDel, setOrderDel] = useState({
    totalOrders: 0,
    totalAmount: 0,
    totalNewCustomers: 0,
  });

  useEffect(() => {
    loadData();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    try {
      const response = await axios.get("/api/website/DashBoard/Data", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setOrderDel({
          totalOrders: response.data.totalOrders,
          totalAmount: response.data.totalAmount,
          totalNewCustomers: response.data.totalNewCustomers,
        });
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
    <div className={DCss.mainDiv}>
      <div className={DCss.top}>
        <div className={DCss.profile}>
          <img className={DCss.image} src={authCtx.user.image} alt="" />
          <div className={DCss.des}>
            <div className={DCss.name}>Hello, {authCtx.user.BusinessName}</div>
            <div className={DCss.sub}>
              Here’s what’s happening with your business today
            </div>
          </div>
        </div>
      </div>

      <div className={DCss.bottom}>
        {/* {data.map((element, i) => { */}
        {/* return ( */}
        <DesCard
          // key={i}
          heading="Total orders"
          value={orderDel.totalOrders}
          change="+5.21%"
          arrow="increase"
        />
        <DesCard
          // key={i}
          heading="Total Earnings"
          value={orderDel.totalAmount}
          change="+5.21%"
          arrow="decrease"
        />
        <DesCard
          // key={i}
          heading="New customers"
          value={orderDel.totalNewCustomers}
          change="+5.21%"
          arrow="increase"
        />
        {/* ); */}
        {/* })} */}
      </div>
    </div>
  );
}
