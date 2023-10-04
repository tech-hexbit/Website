import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";
import SmallLoad from "./../../../MicroInteraction/SmallLoad";

// Css
import osCss from "./Css/overallSales.module.css";

export default function OverallSales() {
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState(false);
  const [load, setLoad] = useState(false);
  const [orderDel, setOrderDel] = useState([]);
  const [Saveload, setSaveLoad] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [active, setActive] = useState({
    pdt: true,
    fashion: false,
    grocery: false,
    furniture: false,
  });

  useEffect(() => {
    loadData();
  }, []);

  const authCtx = useContext(AuthContext);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/common/Order/all", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setOrderDel(response.data.orderList);

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

  const UpdateData = async (id) => {
    setSaveLoad(true);
    try {
      if (selectedValue !== "" || selectedValue !== "Select") {
        let data = {
          value: selectedValue,
          Id: id,
        };

        const response = await axios.post(
          "/api/common/Order/UpdateState",
          data,
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );

        if (response.data.success) {
          setSaveLoad(false);
          setSelectedValue("Select");

          loadData();

          setEdit(!edit);
        } else {
          setSaveLoad(false);
        }
      } else {
        setSaveLoad(false);
      }
    } catch (e) {
      setLoad(false);
      setSaveLoad(false);

      console.log(e);
    }
  };

  const filterData = async function (e) {
    setSearch(e.target.value);
  };

  return (
    <div className={osCss.mainDiv}>
      <div className={osCss.top}>
        <div>Overall Sales</div>
        <div className={osCss.filters}>
          {/* <div className={osCss.select}>
            <div className={osCss.selectInner}>
              <select>
                <option hidden>Ecommerce</option>
              </select>
            </div>
            <div className={osCss.selectInner}>
              <select>
                <option hidden>Status</option>
              </select>
            </div>
          </div> */}
          <div className={osCss.search}>
            <input
              type="text"
              placeholder="Search order"
              onChange={filterData}
            />
          </div>
        </div>
      </div>
      <div className={osCss.middle}>
        <div className={osCss.table}>
          <table style={{ borderCollapse: "collapse" }}>
            {load ? (
              <div className="loadCenterDiv">
                <Load />
              </div>
            ) : (
              <>
                {orderDel?.length > 0 ? (
                  <>
                    <tr>
                      <th></th>
                      <th className="sticky-col">
                        Order id
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="14"
                          viewBox="0 0 9 14"
                          fill="none"
                        >
                          <path
                            d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                            fill="#777777"
                          />
                          <path
                            d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                            fill="#777777"
                          />
                        </svg>
                      </th>
                      <th>
                        Customer
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="14"
                          viewBox="0 0 9 14"
                          fill="none"
                        >
                          <path
                            d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                            fill="#777777"
                          />
                          <path
                            d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                            fill="#777777"
                          />
                        </svg>
                      </th>
                      <th>
                        Price
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="14"
                          viewBox="0 0 9 14"
                          fill="none"
                        >
                          <path
                            d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                            fill="#777777"
                          />
                          <path
                            d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                            fill="#777777"
                          />
                        </svg>
                      </th>
                      <th>
                        Ordered on
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="14"
                          viewBox="0 0 9 14"
                          fill="none"
                        >
                          <path
                            d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                            fill="#777777"
                          />
                          <path
                            d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                            fill="#777777"
                          />
                        </svg>
                      </th>
                      <th className={osCss.payment}>
                        Payment method
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="14"
                          viewBox="0 0 9 14"
                          fill="none"
                        >
                          <path
                            d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                            fill="#777777"
                          />
                          <path
                            d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                            fill="#777777"
                          />
                        </svg>
                      </th>
                      <th className={osCss.payment}>
                        Delivery status
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="14"
                          viewBox="0 0 9 14"
                          fill="none"
                        >
                          <path
                            d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                            fill="#777777"
                          />
                          <path
                            d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                            fill="#777777"
                          />
                        </svg>
                      </th>
                      <th>
                        Buyer
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="14"
                          viewBox="0 0 9 14"
                          fill="none"
                        >
                          <path
                            d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                            fill="#777777"
                          />
                          <path
                            d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                            fill="#777777"
                          />
                        </svg>
                      </th>
                    </tr>
                    {orderDel
                      .filter((value) => {
                        if (search === "") {
                          return value;
                        } else if (
                          value.ONDCBilling.name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return value;
                        }
                      })
                      .map((val, key) => {
                        return (
                          <tr key={key}>
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>#{val._id.slice(-4)}</td>
                            <td>
                              <Link
                                to={`/me/orderdetails/${val._id}`}
                                className="LinkStyle"
                              >
                                {val.ONDCBilling.name}
                              </Link>
                            </td>
                            <td>{val.amount}</td>
                            <td>{val.when.date}</td>
                            <td>{val.status}</td>

                            <td
                              style={{
                                color:
                                  val.state == "Created"
                                    ? "#9e6a03"
                                    : "Accepted"
                                    ? "#4BB543"
                                    : val.state == "In-progress"
                                    ? "#3F81E0"
                                    : "#D0342C",
                              }}
                            >
                              {edit ? (
                                <>
                                  <select
                                    name=""
                                    id={key}
                                    value={selectedValue}
                                    onChange={handleSelectChange}
                                  >
                                    <option value="Select" selected hidden>
                                      Select the Updated Status
                                    </option>
                                    <option value="Accepted">Accepted</option>
                                    <option value="In-progress">
                                      In-progress
                                    </option>
                                    <option value="Completed">Completed</option>
                                    <option value="Cancelled">Cancelled</option>
                                  </select>
                                </>
                              ) : (
                                <>{val.state}</>
                              )}

                              {edit ? (
                                <>
                                  {Saveload ? (
                                    <SmallLoad />
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      class="lucide lucide-save"
                                      className={osCss.lucidePencil}
                                      onClick={() => {
                                        UpdateData(val._id);
                                      }}
                                    >
                                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                                      <polyline points="17 21 17 13 7 13 7 21" />
                                      <polyline points="7 3 7 8 15 8" />
                                    </svg>
                                  )}
                                </>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  class="lucide lucide-pencil"
                                  className={osCss.lucidePencil}
                                  onClick={() => {
                                    setEdit(!edit);
                                  }}
                                >
                                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                  <path d="m15 5 4 4" />
                                </svg>
                              )}
                            </td>
                            <td>{val.buyer}</td>
                          </tr>
                        );
                      })}
                  </>
                ) : (
                  <p className="NoOrders">No Orders</p>
                )}
              </>
            )}
          </table>

          <p className={osCss.showingPTag}>
            Showing <b>{orderDel?.length} </b>
            of <b>{orderDel?.length}</b> results
          </p>
        </div>
      </div>

      {/* <div className={osCss.bottom}>
        <div></div>
        <div className={osCss.pages}>
          <div className={osCss.arrow}>{`<<`}</div>
          <div className={osCss.numbers}>
            <div className={osCss.active}>1</div>
            <div className={osCss.inactive}>2</div>
            <div className={osCss.inactive}>3</div>
          </div>
          <div className={osCss.arrow}>{`>>`}</div>
        </div>
        <div></div>
      </div> */}
    </div>
  );
}
