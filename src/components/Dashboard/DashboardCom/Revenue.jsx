import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// axios
import axios from "axios";

// state
import AuthContext from "./../../../store/auth-context";

// components
import DoughnutChart from "./charts/Doughnut";
import StackedBar from "./charts/StackedBar";

// css
import RCss from "./css/revenue.module.css";

export default function Revenue() {
  const [current, setCurrent] = useState({
    Return: 0,
    Delivered: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    loadData();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadData = async (e) => {
    try {
      const response = await axios.get("/api/website/DashBoard/Revenue/data", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        console.log(response.data.Return);

        setCurrent({
          Return: response.data.Return,
          Delivered: response.data.Delivered,
        });
      } else {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(current);
  }, [current]);

  return (
    <div className={RCss.mainDiv}>
      <div className={RCss.heading}>Revenue</div>
      <div className={RCss.list}>
        <div className={RCss.elements}>
          <div className={RCss.text}>{current.Return}</div>
          <div className={RCss.text}>Return</div>
        </div>
        <div className={RCss.elements}>
          <div className={RCss.text} style={{ color: "#4BB543" }}>
            {current.Delivered}
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

      <Link to="/me/categories" className="LinkStyle" id={RCss.moreInfo}>
        More Info
      </Link>
    </div>
  );
}
