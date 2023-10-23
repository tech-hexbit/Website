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
          <p className={RCss.chartHeadLabel}>Sales Division By Buyer Apps</p>
          <DoughnutChart />
        </div>
        <div className={RCss.chartHead}>
          <p className={RCss.chartHeadLabel}>Weekly Sales Review</p>
          <StackedBar />
        </div>
      </div>
    </div>
  );
}
