import React, { useState, useEffect, useContext } from "react";

// components
import DataMain from "./Categories/DataMain";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

// css
import Ccss from "./Css/Categories.module.css";
import osCss from "./Sales/Css/overallSales.module.css";
import DCss from "./product/Css/display.module.css";

export default function Categories() {
  const [load, setLoad] = useState(false);
  const [orderlist, setorderlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [max, setmax] = useState(false);
  const [prodcutsCount, setProdcutsCount] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [currentPage]);

  useEffect(() => {
    maxPage();
  }, [prodcutsCount, currentPage]);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(
        `/api/common/product/all?page=${currentPage}`,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setorderlist(response?.data?.orderList);

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

  const maxPage = () => {
    if (prodcutsCount > 0) {
      if (currentPage === Math.ceil(prodcutsCount / 10)) {
        setmax(true);
      } else {
        setmax(false);
      }
    } else {
      setmax(true);
    }
  };

  return (
    <div>
      <p className={Ccss.InventoryPTag}>Inventory</p>

      <DataMain />

      <div className={osCss.middlecontent}>
        <div className={Ccss.middle}></div>
        <div id="wrap" className={osCss.table}>
          {load ? (
            <div className="loadCenterDiv">
              <Load />
            </div>
          ) : (
            <>
              <table style={{ borderCollapse: "collapse" }}>
                {orderlist.length > 0 ? (
                  <>
                    <tr>
                      <th className={Ccss["sticky-col"]}>ID </th>
                      <th>Price</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Status</th>
                      <th>Published on</th>
                    </tr>
                    {orderlist?.map((val, key) => {
                      return (
                        <>
                          <tr key={key}>
                            <td>{val.OrderID}</td>
                            <td> ₹ {val.descriptor.name}</td>
                            {/* <td>{val.ONDCBilling.email}</td> */}
                            {/* <td>{val.ONDCBilling.phone}</td> */}
                            <td
                              // className={Ccss.stateTrTag}
                              style={{
                                color:
                                  val.state == "Created"
                                    ? "#7925c7"
                                    : val.state == "Accepted"
                                    ? "#FEC107"
                                    : val.state == "In-progress"
                                    ? "#3F81E0"
                                    : val.state == "Completed"
                                    ? "#4bb543"
                                    : "#D0342C",
                              }}
                            >
                              {val.state}
                            </td>
                            <td>{val.when.date}</td>
                          </tr>
                        </>
                      );
                    })}
                  </>
                ) : (
                  <p className="NoOrders">No Orders</p>
                )}
              </table>
            </>
          )}
        </div>

        <div className={DCss.cenDiv}>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={DCss.btnnb}
          >
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
              class="lucide lucide-chevrons-left"
            >
              <path d="m11 17-5-5 5-5" />
              <path d="m18 17-5-5 5-5" />
            </svg>
          </button>
          <span>{currentPage}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={max}
            className={DCss.btnnb}
          >
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
              class="lucide lucide-chevrons-right"
            >
              <path d="m6 17 5-5-5-5" />
              <path d="m13 17 5-5-5-5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
