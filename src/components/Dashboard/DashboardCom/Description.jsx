import React, { useContext } from "react";

// components
import DesCard from "./DesCard";

// state
import AuthContext from "./../../../store/auth-context";

// css
import DCss from "./css/dashboard.module.css";

// img
import image from "../../../assets/dashboard/userimg.png";

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
  const authCtx = useContext(AuthContext);

  return (
    <div className={DCss.mainDiv}>
      <div className={DCss.top}>
        <div className={DCss.profile}>
          <div className={DCss.image}>
            <img src={image} alt="" />
          </div>
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
