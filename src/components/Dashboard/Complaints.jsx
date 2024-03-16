import React, { useState, useEffect, useContext, useRef } from "react";

// components
import Header from "./MainParts/Header";
import Box from "./Complaints/Box";

// MicroInteraction
import Load from "./../../MicroInteraction/Load";
import { Alert } from "./../../MicroInteraction/Alert";

// state
import AuthContext from "../../store/auth-context";

// axios
import axios from "axios";

// css
import BoxCss from "./Complaints/Css/Box.module.css";
import pt from "./Payment/Css/PaymentTable.module.css";

export default function Complaints() {
  const [load, setLoad] = useState(false);
  const [showData, setData] = useState([]);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/website/Issue/get/list", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setLoad(false);

        console.log(response.data.issueList);

        setData(response.data.issueList);
      } else {
        setLoad(false);

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An unexpected error occurred",
          val: true,
        });
      }
    } catch (error) {
      console.log(error);

      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Header name="Issues" />

        {load ? (
          <div className="loadCenterDiv">
            <Load />
          </div>
        ) : (
          <>
            {showData.length > 0 ? (
              <>
                <table className={pt.trans_table} id={BoxCss.tabID}>
                  <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>DeadLine</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>

                  {showData.map((val, key) => {
                    return <Box key={key} val={val} />;
                  })}
                </table>
              </>
            ) : (
              <>
                <p>No Issues Raised</p>
              </>
            )}
          </>
        )}
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
