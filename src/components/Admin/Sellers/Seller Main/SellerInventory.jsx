import React, { useState, useEffect, useContext } from "react";

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
  const [showFilter, setFilter] = useState(false);
  const [orderlist, setorderlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [prodcutsCount, setProdcutsCount] = useState(0);
  const [searchInput, setSearchInput] = useState()

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);
    setSearchInput('');
    try {
      const response = await axios.get(
        `/api/common/product/allproducts/${showFilter}?page=${currentPage}`,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        console.log(response.data);
        setorderlist(response?.data.products)
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

  useEffect(() => {
    loadData();
  }, [currentPage, showFilter]);

  useEffect(() => {
    maxPage();
  }, [prodcutsCount, currentPage]);

  return (
    <div className={Ccss.mDiv}>
    <div className={Ccss.headerFlex}>
    <div  className={Ccss.search_btn}>
    {/* label>Search page</label> */}
   
    <input value={searchInput} placeholder="Search page" onChange={(e) => setSearchInput(e.target.value)}/>
    <button onClick={() => (searchInput - 1) * 10 >= prodcutsCount  ? setCurrentPage(Math.ceil(prodcutsCount / 10)) : setCurrentPage(searchInput)}>
    <svg xmlns="http://www.w3.org/2000/svg"
    x="0px" 
    y="0px" 
    width="20"
    height="20" 
    viewBox="0 0 30 30" 
    stroke-width="2"
    >
<path
 d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
</svg>
</button>

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
                                    <line x1="12" x2="12.01" y1="16" y2="16" />
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
  );
}
