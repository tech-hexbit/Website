import React, { useContext, useEffect, useState } from "react";

// chart
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

// axios
import axios from "axios";

// css
import "../css/barChart.css";

// state
import AuthContext from "./../../../../store/auth-context";

export default function BarChart() {
  const [daysdata, setDaysData] = useState(false);
  const authCtx = useContext(AuthContext);
  const [days, setDays] = useState([]);

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

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/website/DashBoard/SellerActivity", {
        headers: { Authorization: `${authCtx.token}` },
      });
      if (res.data.success) {
        console.log(res.data.days);
        const updatedDays = res.data.days;
        delete updatedDays[0]["_id"];
        setDays(updatedDays);
      }
    } catch (e) {
      console.log("error in fetching data", e.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  let randomColors = [];

  if (days.length > 2) {
    randomColors = generateRandomColors(days.length - 2);
    randomColors.push("#d8b4fe");
    randomColors.push("#f3e8ff");
  } else {
    randomColors = ["#d8b4fe", "#f3e8ff"];
  }

  console.log(randomColors);
  console.log("days", days[0]);

  const data = {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Cost",
        data: days[0],
        backgroundColor: randomColors,
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
