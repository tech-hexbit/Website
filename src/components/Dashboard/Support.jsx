import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// components
import QA from "./Support/QA";

// state
import AuthContext from "./.././../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import SupCss from "./Support/Css/Support.module.css";

export default function Support() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`/api/website/qna/get`, {
        headers: { Authorization: `${authCtx.token}` },
      });
    } catch (e) {
      setLoad(false);

      console.log(e);
    }
  };
  return (
    <div>
      <p>FAQs</p>

      <div className={SupCss.qamDiv}>
        <QA />
        <QA />
        <QA />
        <QA />
        <QA />
      </div>

      <div>
        <p className={SupCss.queriesPTag}>
          For additonal Queries you can{" "}
          <Link to="/contact">
            <u>contract us</u>
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
