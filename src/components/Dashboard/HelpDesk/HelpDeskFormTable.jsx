import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// components
import MoreInquiries from "./MoreInquiries";
import HelpDeskContent from "./HelpDeskContent";

// state
import AuthContext from "./../../../store/auth-context";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";
import { Alert } from "./../../../MicroInteraction/Alert";

// axios
import axios from "axios";

// css
import hdftable from "./Css/HelpDeskFormTable.module.css";

export default function HelpDeskFormTable() {
  const [load, setLoad] = useState(false);
  const [data, setloadStore] = useState([]);
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
        "/api/website/ContactUs/user/tickts/get/0",
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

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);

    loadStore();
  }, []);

  return (
    <>
      <div className={hdftable.main}>
        <h1>Contact us</h1>

        <div className={hdftable.submain}>
          <h3>Tickets</h3>

          {/* Table */}
          <table className={hdftable.trans_table}>
            <tr>
              <th>Ticket ID</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Status</th>
            </tr>

            {load ? (
              <div className="loadCenterDiv">
                <Load />
              </div>
            ) : (
              <>
                {data ? (
                  <>
                    {data.map((val, key) => (
                      <>
                        <tr key={key}>
                          <td data-cell="ticket Id">#HX{val._id.slice(-5)}</td>
                          <td data-cell="subject">{val.subject}</td>
                          <td data-cell="date">{val.when.date}</td>
                          <td
                            className={
                              val.Status === "Delivered & Eligible" ||
                              val.Status === "Solved"
                                ? hdftable.processed
                                : hdftable.pending
                            }
                            data-cell="status"
                          >
                            {val.Status}
                          </td>
                        </tr>
                      </>
                    ))}
                  </>
                ) : (
                  <div className="loadCenterDiv">No Ticket Raised</div>
                )}
              </>
            )}
          </table>
        </div>
        <div className={hdftable.wrapper}>
          <MoreInquiries />
          <HelpDeskContent />
        </div>

        <Link to="/me/help/desk" className={hdftable.newrequest}>
          <>New Request</>
        </Link>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
