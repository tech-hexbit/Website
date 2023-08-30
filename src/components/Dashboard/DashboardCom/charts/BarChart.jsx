// import React from 'react'
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

export default function BarChart() {
  const data = {
    labels: ["M", "T", "W"],
    datasets: [
      {
        label: "Cost",
        data: [500, 200, 450],
        backgroundColor: ["green", "purple", "blue"],
        maxBarThickness: 14,
      },
      //   {
      //     label: "Planning",
      //     data: 500,
      //     backgroundColor: "purple",
      //     maxBarThickness: 14,
      //   },
      //   {
      //     label: "Budget",
      //     data: 700,
      //     backgroundColor: "blue",
      //     maxBarThickness: 14,
      //   },
    ],
  };
  return (
    <div>
      <Chart width={500} height={250} data={data} type="bar" />
    </div>
  );
}
