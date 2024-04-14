import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// state
import AuthContext from "./../../../store/auth-context";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// axios
import axios from "axios";

// css
import pt from "./Css/PastTicket.module.css";

export default function PastTicket() {
  const [load, setLoad] = useState(false);
  const [showloadStore, setloadStore] = useState([]);

  const authCtx = useContext(AuthContext);

  const loadStore = async () => {
    setLoad(true);

    try {
      const response = await axios.get(
        "/api/website/ContactUs/user/tickts/get/1",
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setLoad(false);

        setloadStore(response.data.qnaEntries);
      } else {
        setLoad(false);
      }
    } catch (e) {
      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
      });
    }
  };

  useEffect(() => {
    loadStore();
  }, []);
  return (
    <>
      <div className={pt.main}>
        <h1>Past Ticket</h1>
        {load ? (
          <div className="loadCenterDiv">
            <Load />
          </div>
        ) : (
          <>
            {showloadStore ? (
              <>
                {showloadStore.map((val, key) => {
                  console.log(val.Status);
                  return (
                    <>
                      <div className={pt.grid} key={key}>
                        <div className={pt.child}>#HX{val._id.slice(-5)}</div>
                        <div
                          className={`${pt.child}`}
                          id={
                            val.Status === "Pending"
                              ? `${pt.orange}`
                              : `${pt.green}`
                          }
                        >
                          {val.Status}
                        </div>
                      </div>
                    </>
                  );
                })}

                <Link to="/me/help/desk/ViewMore" className={pt.btn}>
                  View More
                </Link>
              </>
            ) : (
              <div className="loadCenterDiv">No Ticket Raised</div>
            )}
          </>
        )}
      </div>
    </>
  );
}
