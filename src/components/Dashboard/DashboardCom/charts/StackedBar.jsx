// import React from 'react'
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import '../css/stackedbar.css'
export default function StackedBar() {
  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "Productivity",
        data: [500, 200, 100, 600, 700, 350, 10],
        backgroundColor: "blue",
        maxBarThickness: 14,
      },
      {
        label: "Communication",
        data: [500, 300, 200, 150, 250, 150, 500],
        backgroundColor: "lightblue",
        maxBarThickness: 14,
      },
      {
        label: "Creativity",
        data: [700, 200, 600, 400, 350, 150, 250],
        backgroundColor: "pink",
        maxBarThickness: 14,
      },
      {
        label: "Others",
        data: [50, 250, 750, 450, 250, 500, 400],
        backgroundColor: "green",
        maxBarThickness: 14,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
      maintainAspectRatio:false ,
      responsive:true,
    },
  };
  return (
    <div className="stacked-bar">
      <Chart
        data={data}
        type="bar"
        stacked="true"
        options={options}
      />
    </div>
  );
}
