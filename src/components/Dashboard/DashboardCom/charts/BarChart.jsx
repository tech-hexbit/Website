// import React from 'react'
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import '../css/barChart.css'

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
  const options={
    maintainAspectRatio:false ,
    responsive:true
  }
  return (
    <div className="barChart">
      <Chart data={data} type="bar" options={options} />
    </div>
  );
}
