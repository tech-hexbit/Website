// import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import "../css/dchart.css"
export default function DoughnutChart() {
  const data = {
    labels: ["Direct", "Google", "Apple"],
    datasets: [
      {
        data: [50, 25, 25],
        backgroundColor: ["#7E22CE", "#D8B4FE", "#DBEAFE"],
      },
    ],
  };

  const chartOptions = {
    cutout: "95%",
  };

  return (
    <div className="d-chart">
      <Doughnut  data={data} options={chartOptions} />
    </div>
  );
}
