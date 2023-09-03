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
  const [] = useState({
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

      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

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
        {data.map((element, i) => {
          return (
            <DesCard
              key={i}
              heading={element.cardHeading}
              value={element.cardValue}
              change={element.changeInValue}
              arrow={element.arrow}
            />
          );
        })}
      </div>
    </div>
  );
}
