import React, { useState, useEffect, useContext, useRef } from "react";

// components
import Box from "./Complaints/Box";
import Header from "./MainParts/Header";
import Details from "./Complaints/Details";

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
  const [selectedItem, setSelectedItem] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
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

  const handleOverlay = (refNo) => {
    setShowOverlay(!showOverlay);
    setSelectedItem(refNo);
  };

  const closeOverlay = () => {
    setSelectedItem(null);
    setShowOverlay(showOverlay);
  };

  const filteredRowItem = showData.filter((item) => item._id === selectedItem);

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
            {showOverlay ? (
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

                  {filteredRowItem.map((val, key) => {
                    return (
                      <Box
                        key={key}
                        val={val}
                        handleOverlay={handleOverlay}
                        showOverlay={showOverlay}
                      />
                    );
                  })}
                </table>
              </>
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
                        return (
                          <Box
                            key={key}
                            val={val}
                            showOverlay={showOverlay}
                            handleOverlay={handleOverlay}
                          />
                        );
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
          </>
        )}

        {showOverlay && (
          <Details
            selectedItem={filteredRowItem}
            closeOverlay={closeOverlay}
            setLoadMain={setLoad}
            loadMain={load}
          />
        )}
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
