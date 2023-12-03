import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// components
import QA from "./Support/QA";

// state
import AuthContext from "./.././../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

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

      if (response.data.success) {
        setData(response.data.qnaEntries);

        setLoad(false);
      } else {
        setLoad(false);

        console.log(e);
      }
    } catch (e) {
      setLoad(false);

      console.log(e);
    }
  };
  return (
    <div>
      <p>FAQs</p>

      <div className={SupCss.qamDiv}>
        {load ? (
          <div className="loadCenterDiv">
            <Load />
          </div>
        ) : (
          <>
            {data.length > 0 ? (
              <>
                {data.map((val, key) => {
                  console.log(val);
                  return (
                    <QA key={key} answer={val.answer} question={val.question} />
                  );
                })}
              </>
            ) : (
              ""
            )}
          </>
        )}
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
