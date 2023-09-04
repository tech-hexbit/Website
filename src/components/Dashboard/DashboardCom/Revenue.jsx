import React from "react";

// css
import RCss from "./css/revenue.module.css";

// components
import DoughnutChart from "./charts/Doughnut";
import StackedBar from "./charts/StackedBar";

export default function Revenue() {
  return (
    <div className={RCss.mainDiv}>
      <div className={RCss.heading}>Revenue</div>
      <div className={RCss.list}>
        <div className={RCss.elements}>
          <div className={RCss.text}>56,012</div>
          <div className={RCss.text}>Orders</div>
        </div>
        <div className={RCss.elements}>
          <div className={RCss.text}>₹ 2,47,901</div>
          <div className={RCss.text}>Earnings</div>
        </div>
        <div className={RCss.elements}>
          <div className={RCss.text}>892</div>
          <div className={RCss.text}>Refunds</div>
        </div>
        <div className={RCss.elements}>
          <div className={RCss.text} style={{ color: "#4BB543" }}>
            49,000
          </div>
          <div className={RCss.text}>Delivered</div>
        </div>
      </div>
      <div className={RCss.charts}>
        <div className={RCss.chartHead}>
          Sales Division By Buyer Apps
          <DoughnutChart />
        </div>
        <div className={RCss.chartHead}>
          Weekly Sales Review
          <StackedBar />
        </div>
      </div>
    </div>
  );
}
