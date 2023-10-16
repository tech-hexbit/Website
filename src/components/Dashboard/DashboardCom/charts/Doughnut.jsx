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

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/website/DashBoard/BuyerApps", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        const labels = response.data.frequency.map((e) => e.buyer);
        const data = response.data.frequency.map((e) => e.frequency);

        setGraphData({
          labels,
          datasets: [
            {
              data,
              backgroundColor: ["#7E22CE", "#D8B4FE", "#DBEAFE"],
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
    <div className="d-chart">
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
