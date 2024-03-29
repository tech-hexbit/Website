import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// components
import UpdateState from "./UpdateState";
import Header from "./../MainParts/Header";
import Orderdetails from "./../Orderdetails";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// Css
import osCss from "./Css/overallSales.module.css";

export default function OverallSales() {
  const [max, setmax] = useState(false);
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState("");
  const [orderDel, setOrderDel] = useState([]);
  const [showDel, setHideDel] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderDelCopy, setOrderDelCopy] = useState([]);
  const [prodcutsCount, setProdcutsCount] = useState(0);
  const [loadDataState, setLoadDataState] = useState(false);
  const [showProductDel, setProductDel] = useState({ state: false, id: "" });

  // Add a state variable to track the sort order
  const [sortDateOrder, setSortDateOrder] = useState("asc");
  const [sortPriceOrder, setSortPriceOrder] = useState("asc");
  const [sortByNameOrder, setSortByNameOrder] = useState("asc");
  const [sortPaymentMethodOrder, setSortPaymentMethodOrder] = useState("asc");

  //  Select Filter
  const [buyer, setbuyer] = useState([]);
  const [unique, setunique] = useState([]);
  const [filters, setfilters] = useState({
    buyer: "",
    status: "",
    search: "",
  });

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.post(
        `/api/common/Order/all?page=${currentPage}`,
        filters,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setProdcutsCount(response?.data?.length);
        setOrderDel(response.data.orderList);
        setOrderDelCopy(response.data.orderList);

        response?.data?.orderList?.forEach((order) => {
          setbuyer((prevState) => [...prevState, order.buyer]);
        });

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

  const sortByName = () => {
    const newSortOrder = sortByNameOrder === "asc" ? "desc" : "asc";
    setSortByNameOrder(newSortOrder);

    const sortedOrderDel = [...orderDel].sort((a, b) => {
      if (newSortOrder === "asc") {
        return a.ONDCBilling.name.localeCompare(b.ONDCBilling.name);
      } else {
        return b.ONDCBilling.name.localeCompare(a.ONDCBilling.name);
      }
    });

    setOrderDel(sortedOrderDel);
  };

  const sortByPrice = () => {
    const newSortOrder = sortPriceOrder === "asc" ? "desc" : "asc";
    setSortPriceOrder(newSortOrder);

    const sortedOrderDel = [...orderDel].sort((a, b) => {
      if (newSortOrder === "asc") {
        return a.amount - b.amount;
      } else {
        return b.amount - a.amount;
      }
    });

    setOrderDel(sortedOrderDel);
  };

  const sortByDate = () => {
    const newSortOrder = sortDateOrder === "asc" ? "desc" : "asc";
    setSortDateOrder(newSortOrder);

    const sortedOrderDel = [...orderDel].sort((a, b) => {
      if (newSortOrder === "asc") {
        return a.when.date.localeCompare(b.when.date);
      } else {
        return b.when.date.localeCompare(a.when.date);
      }
    });

    setOrderDel(sortedOrderDel);
  };

  const sortPaymentMethods = () => {
    const newSortOrder = sortPaymentMethodOrder === "asc" ? "desc" : "asc";
    setSortPaymentMethodOrder(newSortOrder);

    const sortedOrderDel = [...orderDel].sort((a, b) => {
      if (newSortOrder === "asc") {
        return a.status.localeCompare(b.status);
      } else {
        return b.status.localeCompare(a.status);
      }
    });

    setOrderDel(sortedOrderDel);
  };

  const filterData = async function (e) {
    setSearch(e.target.value.toLowerCase());
  };

  const handleChange1 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfilters({ ...filters, [name]: value });
  };

  const searchData = (e) => {
    if (search === "") {
      return;
    }

    setfilters({
      ...filters,
      search,
    });
  };

  useEffect(() => {
    loadData();
  }, [currentPage, loadDataState]);

  useEffect(() => {
    maxPage();
  }, [prodcutsCount, currentPage]);

  useEffect(() => {
    const u = (buyer) => [...new Set(buyer)];
    setunique(u(buyer));
  }, [buyer]);

  useEffect(() => {
    loadData();
  }, [filters]);

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
        <div
          className={osCss.mainDiv}
          id={showProductDel.state ? "yesProductsPage" : "noProductsPage"}
        >
          <div className={osCss.top}>
            <Header name="Overall Sales" />

            <div className={osCss.filters}>
              {/* Filters */}
              <div className={osCss.select}>
                {/* Buyers */}
                <div className={osCss.selectInner}>
                  <select
                    onChange={handleChange1}
                    name="buyer"
                    value={filters.buyer}
                  >
                    <option value="Buyer" hidden selected>
                      Buyer
                    </option>
                    {unique.map((buyer) => (
                      <option value={buyer}>{buyer}</option>
                    ))}
                  </select>
                </div>

                {/* Status */}
                <div className={osCss.selectInner}>
                  <select
                    onChange={handleChange1}
                    name="status"
                    value={filters.status}
                  >
                    <option value="Status" hidden selected>
                      Status
                    </option>
                    <option value="Created">Created</option>
                    <option value="Accepted">Accepted</option>
                    <option value="In-progress">In-progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div className={osCss.searchParent}>
                {/* Search */}
                <div className={osCss.search}>
                  <input
                    type="text"
                    value={search}
                    placeholder="Search order"
                    onChange={filterData}
                  />
                  <div className={osCss.searchBtn} onClick={searchData}>
                    Search
                  </div>
                </div>

                {/* Reset */}
                {search !== "" ||
                filters.buyer !== "" ||
                filters.status !== "" ? (
                  <>
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
                      class="lucide lucide-filter-x"
                      className={osCss.resetFilBtn}
                      onClick={() => {
                        setSearch("");
                        setfilters((prevFilters) => ({
                          ...prevFilters,
                          buyer: "",
                          status: "",
                          search: "",
                        }));
                      }}
                    >
                      <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055" />
                      <path d="m22 3-5 5" />
                      <path d="m17 3 5 5" />
                    </svg>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className={osCss.middle}>
            <div className={osCss.table}>
              <table
                className={osCss.tableOSTTag}
                style={{ borderCollapse: "collapse" }}
              >
                {load ? (
                  <div className="loadCenterDiv">
                    <Load />
                  </div>
                ) : (
                  <>
                    {orderDel?.length > 0 ? (
                      <>
                        <tr>
                          <th className={osCss.thTag}>
                            <p>Order ID</p>
                          </th>
                          <th className={osCss.thTag} onClick={sortByName}>
                            Customer
                            <svg
                              className={osCss.svgTag}
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="14"
                              viewBox="0 0 9 14"
                              fill="none"
                            >
                              <path
                                d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                                fill={
                                  sortByNameOrder === "desc"
                                    ? "#777777"
                                    : "#c782ff"
                                }
                              />
                              <path
                                d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                                fill={
                                  sortByNameOrder === "asc"
                                    ? "#777777"
                                    : "#c782ff"
                                }
                              />
                            </svg>
                          </th>

                          <th className={osCss.thTag} onClick={sortByPrice}>
                            Price
                            <svg
                              className={osCss.svgTag}
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="14"
                              viewBox="0 0 9 14"
                              fill="none"
                            >
                              <path
                                d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                                fill={
                                  sortPriceOrder === "desc"
                                    ? "#777777"
                                    : "#c782ff"
                                }
                              />
                              <path
                                d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                                fill={
                                  sortPriceOrder === "asc"
                                    ? "#777777"
                                    : "#c782ff"
                                }
                              />
                            </svg>
                          </th>
                          <th className={osCss.thTag} onClick={sortByDate}>
                            Ordered on
                            <svg
                              className={osCss.svgTag}
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="14"
                              viewBox="0 0 9 14"
                              fill="none"
                            >
                              <path
                                d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                                fill={
                                  sortDateOrder === "desc"
                                    ? "#777777"
                                    : "#c782ff"
                                }
                              />
                              <path
                                d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                                fill={
                                  sortDateOrder === "asc"
                                    ? "#777777"
                                    : "#c782ff"
                                }
                              />
                            </svg>
                          </th>
                          <th
                            className={osCss.payment}
                            onClick={sortPaymentMethods}
                          >
                            Payment method
                            <svg
                              className={osCss.svgTag}
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="14"
                              viewBox="0 0 9 14"
                              fill="none"
                            >
                              <path
                                d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                                fill={
                                  sortPaymentMethodOrder === "desc"
                                    ? "#777777"
                                    : "#c782ff"
                                }
                              />
                              <path
                                d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                                fill={
                                  sortPaymentMethodOrder === "asc"
                                    ? "#777777"
                                    : "#c782ff"
                                }
                              />
                            </svg>
                          </th>
                          <th>Buyer</th>
                          <th className={osCss.payment}>Delivery status</th>
                        </tr>

                        {/* Maping Data */}
                        {orderDel.map((val, key) => {
                          return (
                            <tr className={osCss.trDiv} key={key}>
                              <td
                                onClick={() => {
                                  setProductDel({
                                    state: true,
                                    id: val._id,
                                  });
                                  setHideDel(!showDel);
                                }}
                                data-cell="ID"
                              >
                                {" "}
                                #{val._id.slice(-4)}
                              </td>
                              <td
                                onClick={() => {
                                  setProductDel({
                                    state: true,
                                    id: val._id,
                                  });
                                  setHideDel(!showDel);
                                }}
                                data-cell="CUSTOMER "
                              >
                                {val.ONDCBilling.name}
                              </td>
                              <td
                                onClick={() => {
                                  setProductDel({
                                    state: true,
                                    id: val._id,
                                  });
                                  setHideDel(!showDel);
                                }}
                                data-cell="PRICE"
                              >
                                {" "}
                                ₹ {val.amount.toFixed(2)}
                              </td>
                              <td
                                onClick={() => {
                                  setProductDel({
                                    state: true,
                                    id: val._id,
                                  });
                                  setHideDel(!showDel);
                                }}
                                data-cell="ORDERED ON"
                              >
                                {" "}
                                {val.when.date}
                              </td>
                              <td
                                onClick={() => {
                                  setProductDel({
                                    state: true,
                                    id: val._id,
                                  });
                                  setHideDel(!showDel);
                                }}
                                data-cell="PAYMENT METHOD"
                              >
                                {val.status}
                              </td>
                              <td
                                onClick={() => {
                                  setProductDel({
                                    state: true,
                                    id: val._id,
                                  });
                                  setHideDel(!showDel);
                                }}
                                data-cell="BUYER "
                              >
                                {val.buyer}
                              </td>

                              <UpdateState
                                state={val.state}
                                id={val._id}
                                setLoadDataState={setLoadDataState}
                                loadDataState={loadDataState}
                                dataCell="DELIVERY STATUS"
                              />
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
                Showing <b>{10 * (currentPage - 1) + orderDel?.length} </b>
                of <b>{prodcutsCount}</b> results
              </p>
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
      )}
    </>
  );
}
