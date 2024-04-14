import React, { useState, useEffect, useContext, useRef } from "react";

// components
import UpdateInfo from "./UpdateInfo";
import Orderdetails from "./../Orderdetails";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// css
import DelCss from "./Css/Details.module.css";

export default function Details({
  selectedItem,
  closeOverlay,
  setLoadMain,
  loadMain,
}) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [update, setUpdate] = useState(false);
  const [dataItem, setDataItem] = useState([]);
  const [showDel, setHideDel] = useState(false);
  const [showProductDel, setProductDel] = useState({ state: false, id: "" });

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(
        `/api/website/Issue/get/list/full/${selectedItem[0]._id}`,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setLoad(false);

        console.log(response.data.issueList);
        console.log(response.data.itemsList);

        setData(response.data.issueList);
        setDataItem(response.data.itemsList);
      } else {
        setLoad(false);

        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An unexpected error occurred",
        });
      }
    } catch (error) {
      console.log(error);

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
    if (selectedItem.length === 0) {
      return;
    }

    loadData();
  }, [, selectedItem]);

  return (
    <>
      {showDel ? (
        <>
          <Orderdetails
            id={showProductDel.id}
            setProductDel={setProductDel}
            showDel={showDel}
            setHideDel={setHideDel}
          />
        </>
      ) : (
        <>
          {load ? (
            <div className="loadCenterDiv">
              <Load />
            </div>
          ) : (
            <>
              {data.length > 0 ? (
                <div>
                  <div className={DelCss.headerRow}>
                    <div>
                      <p>
                        Issue for <b>Item Mismatch</b>
                      </p>

                      <p>
                        <b>Order ID: </b>
                        <span id={DelCss.ordIDSpan}>{data[0].orderID._id}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-external-link"
                          className={DelCss.openExt}
                          onClick={() => {
                            setProductDel({
                              state: true,
                              id: data[0].orderID._id,
                            });
                            setHideDel(!showDel);
                          }}
                        >
                          <path d="M15 3h6v6" />
                          <path d="M10 14 21 3" />
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                      </p>

                      <p className={DelCss.cusDel}>
                        {data[0].complainant_info.person.name},{" "}
                        {data[0].complainant_info.contact.phone},
                        <br />
                        {data[0].complainant_info.contact.email}
                      </p>
                    </div>

                    {data[0].issue_actions.complainant_actions[0]
                      .complainant_action === "OPEN" ? (
                      <div className={DelCss.statusCurr}>OPEN</div>
                    ) : (
                      <div className={DelCss.statusCurrCl}>CLOSED</div>
                    )}
                  </div>

                  {/* Items */}
                  <div className={DelCss.itemDiv}>
                    <p>
                      <b>Issue Item(s)</b>
                    </p>

                    <div className={DelCss.itemMapDiv}>
                      {dataItem.length > 0 ? (
                        <>
                          {dataItem.map((val, key) => {
                            console.log(val[0]);
                            return (
                              <div key={key} className={DelCss.mapItemMDiv}>
                                <div>
                                  <img
                                    src={val[0].descriptor.symbol}
                                    alt="isssue_img"
                                    className={DelCss.imgCl}
                                  />
                                </div>
                                <div className={DelCss.textOverflow}>
                                  {val[0].descriptor.name}
                                </div>
                              </div>
                            );
                          })}
                        </>
                      ) : (
                        <div className="loadCenterDiv">No Data to Show</div>
                      )}
                    </div>
                  </div>

                  <div className={DelCss.sumDiv}>
                    <p>
                      <b>Summary</b>
                    </p>

                    <p>
                      <b>Shot Description: </b>
                      {data[0].description.short_desc}
                    </p>

                    <p>
                      <b>Long Description: </b>
                      {data[0].description.long_desc}
                    </p>
                  </div>

                  {update && (
                    <UpdateInfo update={update} setUpdate={setUpdate} />
                  )}

                  <div className={DelCss.upState}>
                    {update ? (
                      <button className={DelCss.upStateBtn}>Save</button>
                    ) : (
                      <button
                        className={DelCss.upStateBtn}
                        onClick={() => {
                          setUpdate(!update);
                        }}
                      >
                        Update Status
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="loadCenterDiv">No Data to Show</div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
