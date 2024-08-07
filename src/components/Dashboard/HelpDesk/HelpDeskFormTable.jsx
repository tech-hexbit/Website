import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// components
import MoreInquiries from "./MoreInquiries";
import HelpDeskContent from "./HelpDeskContent";
import HelpDeskFormTableDetail from "./HelpDeskFormTableDetail";

// state
import AuthContext from "./../../../store/auth-context";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// axios
import axios from "axios";

// css
import hdftable from "./Css/HelpDeskFormTable.module.css";

export default function HelpDeskFormTable() {
  const [load, setLoad] = useState(false);
  const [data, setloadStore] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [hideTabel, setHideTabel] = useState(false);

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

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
      });
    }
  };

  const tableVal = (val) => {
    setTableData(val);
    setHideTabel(!hideTabel);
  };

  const overlayerTabel = () => {
    setHideTabel(!hideTabel);
  };

  useEffect(() => {
    loadStore();
  }, []);

  return (
    <>
      <div>
        {hideTabel ? (
          <div>
            <div className={hdftable.main}>
              <h1>Contact us</h1>
              <div className={hdftable.submain}>
                <h3>Tickets</h3>
                <div onClick={overlayerTabel}>
                  <table className={hdftable.trans_table}>
                    <tr>
                      <th>Ticket ID</th>
                      <th>Subject</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                    <tr>
                      <td data-cell="ticket Id">
                        #HX{tableData._id.slice(-5)}
                      </td>
                      <td data-cell="subject">{tableData.subject}</td>
                      <td data-cell="date">{tableData.when.date}</td>
                      <td
                        className={
                          tableData.Status === "Delivered & Eligible" ||
                          tableData.Status === "Solved"
                            ? hdftable.processed
                            : hdftable.pending
                        }
                        data-cell="status"
                      >
                        {tableData.Status}
                      </td>
                      <td
                        data-cell="action"
                        onClick={() => {
                          tableVal(val);
                        }}
                      >
                        Close Details
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <HelpDeskFormTableDetail
              tableVal={tableVal}
              tableData={tableData}
              data={data}
            />
          </div>
        ) : (
          <div className={hdftable.main}>
            <h1>Contact us</h1>

            <div className={hdftable.submain}>
              <h3>Tickets</h3>

              {load ? (
                <div className="loadCenterDiv">
                  <Load />
                </div>
              ) : (
                <>
                  {data ? (
                    <>
                      {/* Table */}
                      <table className={hdftable.trans_table}>
                        <tr>
                          <th>Ticket ID</th>
                          <th>Subject</th>
                          <th>Date</th>
                          <th>Status</th>
                        </tr>
                        {data.map((val, key) => (
                          <>
                            <tr
                              key={key}
                              onClick={() => {
                                tableVal(val);
                              }}
                            >
                              <td data-cell="ticket Id">
                                #HX{val._id.slice(-5)}
                              </td>
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
                              <td
                                data-cell="action"
                                onClick={() => {
                                  tableVal(val);
                                }}
                              >
                                View Details
                              </td>
                            </tr>
                          </>
                        ))}
                      </table>
                    </>
                  ) : (
                    <div className="loadCenterDiv">No Ticket Raised</div>
                  )}
                </>
              )}
            </div>
            <div className={hdftable.wrapper}>
              <MoreInquiries />
              <HelpDeskContent />
            </div>

            <Link to="/me/help/desk" className={hdftable.newrequest}>
              <>New Request</>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
