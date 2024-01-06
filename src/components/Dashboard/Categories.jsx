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
import DCss from "./product/Css/display.module.css";
import osCss from "../Dashboard/Sales/Css/overallSales.module.css";

export default function Categories() {
  const [max, setmax] = useState(false);
  const [load, setLoad] = useState(false);
  const [orderlist, setorderlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [prodcutsCount, setProdcutsCount] = useState(0);

  useEffect(() => {
    loadData();
  }, [, currentPage]);

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
          headers: { Authorization: `${authCtx.token}` }
        }
      );

      if (response.data.success) {
        setorderlist(response?.data?.orderList);
        setProdcutsCount(response?.data?.length);

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
    <div className={Ccss.mDiv}>
      <p className={Ccss.InventoryPTag}>Inventory</p>

      <DataMain />

      <div className={Ccss.middlecontent}>
        <div className={Ccss.middle}></div>
        <div id="wrap" className={Ccss.tableCat}>
          {load ? (
            <div className="loadCenterDiv">
              <Load />
            </div>
          ) : (
            <>
              <table
                className={Ccss.tableCatTTag}
                style={{ borderCollapse: "collapse" }}
              >
                {orderlist.length > 0 ? (
                  <>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Available Inventory</th>
                      <th>Total Orders</th>
                      <th>Shipping Time</th>
                      <th>Return Window</th>
                      <th>Published on</th>
                    </tr>
                    {orderlist?.map((val, key) => {
                      return (
                        <>
                          <tr
                            key={key}
                            className={
                              val.quantity.maximum.count <= 5 ? "alertTrue" : ""
                            }
                          >
                            <td data-cell="Name">{val.descriptor.name}</td>
                            <td data-cell="Price">
                              ₹ {val.price.value.toFixed(2)}
                            </td>
                            <td data-cell="Available Inventory">
                              {val.quantity.maximum.count}
                            </td>
                            <td data-cell="Total Orders">{val.totalSold}</td>
                            <td data-cell="Shipping Time">
                              {val["@ondc/org/time_to_ship"]}
                            </td>
                            <td data-cell="Return Window">
                              {val["@ondc/org/return_window"]}
                            </td>
                            <td data-cell="Published on">{val.when.date}</td>
                          </tr>
                        </>
                      );
                    })}
                  </>
                ) : (
                  <p className="NoOrders">No Orders</p>
                )}
              </table>

              <p className={DCss.showingPTag}>
                Showing
                {orderlist?.length <= 10 ? (
                  <b>{10 * (currentPage - 1) + orderlist?.length} </b>
                ) : (
                  <b>5</b>
                )}
                of <b>{prodcutsCount}</b> results
              </p>
            </>
          )}
        </div>
      </div>

      <div className={osCss.cenDiv}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={osCss.btnnb}
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
          className={osCss.btnnb}
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
  );
}
