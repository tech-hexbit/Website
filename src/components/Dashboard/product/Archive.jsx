import React, { useState, useEffect, useContext } from "react";

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

export default function Archive() {
  const [load, setLoad] = useState(false);
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

      console.log(response.data);

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

      console.log(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      Archive
      <div>
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
                                  class="lucide lucide-trash-2"
                                >
                                  <path d="M3 6h18" />
                                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                  <line x1="10" x2="10" y1="11" y2="17" />
                                  <line x1="14" x2="14" y1="11" y2="17" />
                                </svg>
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
                                  <p className={cardDisplay.cardText}>Price:</p>
                                  <p className={cardDisplay.cardTextSecond}>
                                    ₹ {val.price.maximum_value.toFixed(2)}
                                  </p>
                                </div>
                                <div className={cardDisplay.cardcontent}>
                                  <p className={cardDisplay.cardText}>Stock:</p>
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
                                  class="lucide lucide-trash-2"
                                >
                                  <path d="M3 6h18" />
                                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                  <line x1="10" x2="10" y1="11" y2="17" />
                                  <line x1="14" x2="14" y1="11" y2="17" />
                                </svg>
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
  );
}
