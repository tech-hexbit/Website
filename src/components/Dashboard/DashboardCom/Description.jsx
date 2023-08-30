import React from "react";

import image from "../../../assets/dashboard/userimg.png";

import DCss from "./css/dashboard.module.css";
import DesCard from "./DesCard";

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
  return (
    <div className={DCss.mainDiv}>
      <div className={DCss.top}>
        <div className={DCss.profile}>
          <div className={DCss.image}>
            <img src={image} alt="" />
          </div>
          <div className={DCss.des}>
            <div className={DCss.name}>Hello, Anna</div>
            <div className={DCss.sub}>
              Here’s what’s happening with your business today
            </div>
          </div>
        </div>
        {/* <div className={DCss.button}>
          <button>+ Add product</button>
        </div> */}
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
