import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// components
import DeleteFun from "./DeleteFun";
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
  const [showProductDel, setProductDel] = useState({ state: false, id: "" });
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
                              <Link
                                to={`/me/products/${val._id}`}
                                className="LinkStyle"
                              >
                                <div className={DCss.col1}>
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
                              </Link>
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
                              <DeleteFun
                                id={val._id}
                                loadData={loadData}
                                code={1}
                              />
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

                                <DeleteFun
                                  id={val._id}
                                  loadData={loadData}
                                  code={1}
                                />
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
