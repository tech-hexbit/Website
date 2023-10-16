import React, { useState, useEffect, useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

// axios
import axios from "axios";

// state
import AuthContext from "./../../../../store/auth-context";

// css
import "../css/dchart.css";

export default function DoughnutChart() {
  const [graphData, setGraphData] = useState({
    labels: [],
    data: [],
  });

  const authCtx = useContext(AuthContext);

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

  const loadData = async () => {
    try {
      const response = await axios.get("/api/website/DashBoard/BuyerApps", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        // response.data.frequency.forEach((e) => {

        const labels = response.data.frequency.map((e) => e.buyer);
        const data = response.data.frequency.map((e) => e.frequency);

        setGraphData({
          labels,
          data,
        });

        console.log(response.data.frequency);
      } else {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="d-chart">
      <Doughnut data={data} options={chartOptions} />
    </div>
  );
}
