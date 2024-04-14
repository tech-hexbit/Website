import React, { useState, useEffect, useContext } from "react";

// excel
import * as XLSX from "xlsx";

// axios
import axios from "axios";

// state
import AuthContext from "../../../../store/auth-context";

// MicroInteraction
import Load from "./../../../../MicroInteraction/LoadBlack";

// css
import Ccss from "../../../Dashboard/Css/Categories.module.css";
import DCss from "../../../Dashboard/product/Css/display.module.css";
import osCss from "../../../Dashboard/Sales/Css/overallSales.module.css";

export default function SellerInventory() {
  const [max, setmax] = useState(false);
  const [load, setLoad] = useState(false);
  const [orderlist, setorderlist] = useState([]);
  const [showFilter, setFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productName, setProductName] = useState("");
  const [prodcutsCount, setProdcutsCount] = useState(0);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(
        `/api/common/product/allproducts/${showFilter}?page=${currentPage}&productName=${productName}`,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setorderlist(response?.data.products);
        setProdcutsCount(response?.data?.prodcutsCount);

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
      if (currentPage >= Math.ceil(prodcutsCount / 10)) {
        setmax(true);
      } else {
        setmax(false);
      }
    } else {
      setmax(true);
    }
  };

  const exportExcel = async () => {
    try {
      const response = await axios.get(
        `/api/common/product/exportData/Inventory`,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        console.log(response.data.products);

        const inventoryData = response.data.products;

        const wb = XLSX.utils.book_new();

        const ws = XLSX.utils.json_to_sheet(inventoryData);

        XLSX.utils.book_append_sheet(wb, ws, "Inventory Data");

        XLSX.writeFile(wb, "inventory_data.xlsx");
      } else {
        console.log(e);

        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Export failed",
        });
      }
    } catch (e) {
      console.log(e);

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
    loadData();
  }, [currentPage, showFilter]);

  useEffect(() => {
    maxPage();
  }, [prodcutsCount, currentPage]);

  return (
    <>
      <div className={Ccss.mDiv}>
        <div className={Ccss.headerFlex}>
          <div className={osCss.searchParent}>
            <div className={Ccss.search}>
              <input
                type="text"
                value={productName}
                placeholder="Search Product Name"
                onChange={(e) => setProductName(e.target.value)}
              />
              <div
                className={Ccss.searchBtn}
                onClick={() => {
                  loadData();
                  setCurrentPage(1);
                }}
              >
                Search
              </div>
            </div>
          </div>

          <div className={Ccss.addCsv}>
            <button onClick={() => setFilter(!showFilter)}>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-down-up"
                >
                  <path d="m3 16 4 4 4-4" />
                  <path d="M7 20V4" />
                  <path d="m21 8-4-4-4 4" />
                  <path d="M17 4v16" />
                </svg>
              </p>
              <p className={Ccss.hideTxt}>Low Inventory</p>
            </button>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-file-spreadsheet"
              className={Ccss.excelIcon}
              onClick={exportExcel}
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M8 13h2" />
              <path d="M14 13h2" />
              <path d="M8 17h2" />
              <path d="M14 17h2" />
            </svg>
          </div>
        </div>
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
                            <tr key={key}>
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
                              <td data-cell="Published on">
                                <div className={Ccss.warnDiv}>
                                  {val.when.date}

                                  {val.quantity.maximum.count <= 5 ? (
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
                                      class="lucide lucide-alert-circle"
                                    >
                                      <circle cx="12" cy="12" r="10" />
                                      <line x1="12" x2="12" y1="8" y2="12" />
                                      <line
                                        x1="12"
                                        x2="12.01"
                                        y1="16"
                                        y2="16"
                                      />
                                    </svg>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </td>
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
                  Showing{" "}
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
            onClick={() => setCurrentPage(parseInt(currentPage) + 1)}
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
    </>
  );
}
