import React, { useState, useEffect, useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

import Load from "./../../../../MicroInteraction/LoadBlack";

// axios
import axios from "axios";

// state
import AuthContext from "./../../../../store/auth-context";

// css
import "../css/dchart.css";

export default function DoughnutChart() {
  const [load, setLoad] = useState(false);
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ["#7E22CE", "#D8B4FE", "#DBEAFE"],
      },
    ],
  });

  const authCtx = useContext(AuthContext);

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

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/website/DashBoard/BuyerApps", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        const labels = response.data.frequency.map((e) => e.buyer);
        const data = response.data.frequency.map((e) => e.frequency);

        let randomColors = [];
        if (data.length > 2) {
          randomColors = generateRandomColors(data.length - 2);
          randomColors.push("#d8b4fe");
          randomColors.push("#f3e8ff");
        } else {
          randomColors = ["#d8b4fe", "#f3e8ff"];
        }

        console.log(randomColors);

        setGraphData({
          labels,
          datasets: [
            {
              data,
              backgroundColor: randomColors,
            },
          ],
        });

        setLoad(false);
      } else {
        console.log(e);

        setLoad(true);
      }
    } catch (e) {
      console.log(e);

      setLoad(true);
    }
  };

  const chartOptions = {
    cutout: "95%",
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="dChart">
      {load ? (
        <div className="loadCenterDivM">
          <Load />
        </div>
      ) : (
        <Doughnut data={graphData} options={chartOptions} />
      )}
    </div>
  );
}
