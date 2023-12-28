// import React from 'react'
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

// css
import "../css/barChart.css";
import axios from "axios";

import AuthContext from "./../../../../store/auth-context";
import { useContext, useEffect, useState } from "react";

export default function BarChart() {
  const [daysdata, setDaysData] = useState(false);
  const [currColor, setCurrColor] = useState([]);
  const authCtx = useContext(AuthContext);
  const [days, setDays] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/website/DashBoard/SellerActivity", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (res.data.success) {
        let randomColors = [];

        randomColors = generateRandomColors(7);

        setCurrColor(randomColors);

        setDays(res.data.days);
      }
    } catch (e) {
      console.log("error in fetching data", e.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  function generateRandomColors(length) {
    const colors = [];
    const hexChars = "0123456789ABCDEF";

    for (let i = 0; i < length; i++) {
      let color = "#";
      for (let j = 0; j < 6; j++) {
        color += hexChars[Math.floor(Math.random() * 16)];
      }
      colors.push(color);
    }

    return colors;
  }

  const data = {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Cost",
        data: days[0],
        backgroundColor: currColor,
        maxBarThickness: 14,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="barChart">
      <Chart data={data} type="bar" options={options} />
    </div>
  );
}
