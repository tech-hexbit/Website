import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// state
import AuthContext from "./../../../store/auth-context";

// MicroInteraction
import Load from "./../../../MicroInteraction/Load";
import { Alert } from "./../../../MicroInteraction/Alert";

// axios
import axios from "axios";

// css
import pt from "./Css/PastTicket.module.css";

export default function PastTicket() {
  const [load, setLoad] = useState(false);
  const [showloadStore, setloadStore] = useState([]);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

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
                  return (
                    <>
                      <div className={pt.grid}>
                        <div className={pt.child}>#HX00001</div>
                        <div className={`${pt.child} ${pt.orange}`}>
                          Pending
                        </div>
                        <div className={pt.child}>#HX00002</div>
                        <div className={`${pt.child} ${pt.green}`}>Solved</div>
                        <div className={pt.child}>#HX00003</div>
                        <div className={`${pt.child} ${pt.green}`}>Solved</div>
                        <div className={pt.child}>#HX00004</div>
                        <div className={`${pt.child} ${pt.green}`}>Solved</div>
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

      <Alert variant={variants} val={setError} />
    </>
  );
}
