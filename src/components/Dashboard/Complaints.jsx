import React, { useState, useEffect, useContext, useRef } from "react";

// components
import Header from "./MainParts/Header";

// MicroInteraction
import Load from "./../../MicroInteraction/Load";
import { Alert } from "./../../MicroInteraction/Alert";

// state
import AuthContext from "../../store/auth-context";

// axios
import axios from "axios";

// css
import AQCss from "./Css/Complaints.module.css";

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
              {showData.map((val, key) => {
                return (
                  <div key={key} className="">
                    ID : {val.issueID}
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <p>No Issues Raised</p>
            </>
          )}
        </>
      )}
    </div>
  );
}
