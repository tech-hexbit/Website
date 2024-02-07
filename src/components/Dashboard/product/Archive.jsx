import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

// components
import Header from "./../MainParts/Header";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";
import { Alert } from "./../../../MicroInteraction/Alert";

// state
import AuthContext from "./../../../store/auth-context";

// css
import DCss from "./Css/display.module.css";
import cardDisplay from "./Css/cardDisplay.module.css";

export default function Archive({ setArchive }) {
  const [load, setLoad] = useState(false);
  const [loadDel, setLoadDel] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredlist, setfilteredlist] = useState({
    productList: [],
    prodcutsCount: 0,
  });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(
        `/api/common/product/archive?page=${currentPage}`,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setfilteredlist({
          ...filteredlist,
          productList: response.data.orderList,
          prodcutsCount: response.data.prodcutsCount,
        });

        setLoad(false);
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

      console.log(e);
    }
  };

  const deleteproduct = async (_id) => {
    setLoadDel(true);

    try {
      const response = await axios.delete(
        `/api/common/product/delete/undo/${_id}`,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.status === 200) {
        setLoadDel(false);

        loadData();
      } else {
        setLoadDel(false);

        console.log("error");

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Unable to Add",
          val: true,
        });
      }
    } catch (error) {
      console.log(error);

      setLoadDel(false);

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
    loadData();
  }, []);

  return (
    <>
      <div>
        <div className={DCss.arcHeaderDiv}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-left"
            className={DCss.arcHeadBackIcon}
            onClick={() => {
              setArchive(false);
            }}
          >
            <path d="m15 18-6-6 6-6" />
          </svg>

          <Header name="Archive" />
        </div>

        <div className={DCss.arcMain}>
          {load ? (
            <div className="loadCenterDiv">
              <Load />
            </div>
          ) : (
            <div className={DCss.table}>
              <table
                className={DCss.tableTag}
                style={{ borderCollapse: "collapse" }}
              >
                {filteredlist.productList.length > 0 ? (
                  <>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th id={DCss.stock}>Stock</th>
                      <th id={DCss.orders}>Orders</th>
                      <th id={DCss.published}>Published on</th>
                      <th>Action</th>
                    </tr>
                    {filteredlist.productList.map((val, key) => {
                      return (
                        <>
                          <tr key={key}>
                            <td className={DCss.row} id={DCss.col1}>
                              <div
                                className={DCss.col1}
                                onClick={() => {
                                  setProductDel({ state: true, id: val._id });
                                }}
                              >
                                <div className={DCss.image}>
                                  <img
                                    src={val.descriptor.images[0]}
                                    className={DCss.imgTag}
                                  />
                                </div>
                                <div className={DCss.col1Text}>
                                  <div className={DCss.textTop}>
                                    {val.descriptor.name}
                                  </div>
                                  <div className={DCss.textBottom}>
                                    Category : {val.category_id}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className={DCss.row} id={DCss.price}>
                              ₹ {val.price.maximum_value.toFixed(2)}
                            </td>
                            <td className={DCss.row} id={DCss.stock}>
                              {val.quantity.maximum.count}
                            </td>
                            <td className={DCss.row} id={DCss.orders}>
                              {val.fulfillment_id}
                            </td>
                            <td className={DCss.row}>
                              <div className={DCss.col5}>
                                <div className={DCss.textTop}>
                                  {val.when.date}
                                </div>
                                <div className={DCss.textBottom}>
                                  {val.when.time} IST
                                </div>
                              </div>
                            </td>
                            <td className={DCss.row} id={DCss.col6}>
                              <div className={DCss.dots}>
                                <div
                                  className={DCss.deleteDiv}
                                  onClick={() => deleteproduct(val._id)}
                                >
                                  {loadDel ? (
                                    <Load />
                                  ) : (
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
                                      class="lucide lucide-rotate-ccw"
                                    >
                                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                      <path d="M3 3v5h5" />
                                    </svg>
                                  )}
                                </div>
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

              {filteredlist.productList ? (
                <>
                  <div>
                    {filteredlist.productList.length > 0 ? (
                      <>
                        <div className={cardDisplay.cardMain}>
                          {filteredlist.productList.map((val, key) => {
                            return (
                              <div className={cardDisplay.card}>
                                <div
                                  onClick={() => {
                                    setProductDel({ state: true, id: val._id });
                                  }}
                                >
                                  <div className={cardDisplay.imgDiv}>
                                    <img
                                      src={val.descriptor.images[0]}
                                      className={cardDisplay.imgTag}
                                    />
                                  </div>
                                  <div className={cardDisplay.cardcontent}>
                                    <p className={cardDisplay.cardText}>
                                      Product:
                                    </p>
                                    <p className={cardDisplay.cardTextSecond}>
                                      {val.descriptor.name}
                                    </p>
                                  </div>
                                  <div className={cardDisplay.cardcontent}>
                                    <p className={cardDisplay.cardText}>
                                      Price:
                                    </p>
                                    <p className={cardDisplay.cardTextSecond}>
                                      ₹ {val.price.maximum_value.toFixed(2)}
                                    </p>
                                  </div>
                                  <div className={cardDisplay.cardcontent}>
                                    <p className={cardDisplay.cardText}>
                                      Stock:
                                    </p>
                                    <p className={cardDisplay.cardTextSecond}>
                                      {val.quantity.maximum.count}
                                    </p>
                                  </div>
                                  <div className={cardDisplay.cardcontent}>
                                    <p className={cardDisplay.cardText}>
                                      Orders:
                                    </p>
                                    <p className={cardDisplay.cardTextSecond}>
                                      {val.fulfillment_id}
                                    </p>
                                  </div>
                                  <div className={cardDisplay.cardcontent}>
                                    <p className={cardDisplay.cardText}>
                                      Published on:
                                    </p>
                                    <p className={cardDisplay.cardTextSecond}>
                                      {val.when.date}
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className={cardDisplay.deleteBtn}
                                  onClick={() => deleteproduct(val._id)}
                                >
                                  {loadDel ? (
                                    <Load />
                                  ) : (
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
                                      class="lucide lucide-rotate-ccw"
                                    >
                                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                      <path d="M3 3v5h5" />
                                    </svg>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <p className="NoOrders">No Orders</p>
                    )}
                  </div>
                </>
              ) : (
                ""
              )}

              {/* Show Label */}
              <p className={DCss.showingPTag}>
                Showing{" "}
                {filteredlist.prodcutsCount <= 10 ? (
                  <b>{10 * (currentPage - 1) + filteredlist.prodcutsCount} </b>
                ) : (
                  <b>10</b>
                )}{" "}
                of <b>{filteredlist.prodcutsCount}</b> results
              </p>
            </div>
          )}
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}

Archive.propTypes = {
  setArchive: PropTypes.func.isRequired,
};
