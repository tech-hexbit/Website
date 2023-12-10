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
          headers: { Authorization: `${authCtx.token}` },
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
    <div>
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
              <table style={{ borderCollapse: "collapse" }}>
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
                            <td
                              data-cell="Name"
                              style={{
                                backgroundColor:
                                  val.quantity.maximum.count <= 5
                                    ? "#FF8046"
                                    : "",
                              }}
                            >
                              {val.descriptor.name}
                            </td>
                            <td
                              data-cell="Price"
                              style={{
                                backgroundColor:
                                  val.quantity.maximum.count <= 5
                                    ? "#FF8046"
                                    : "",
                              }}
                            >
                              ₹ {val.price.value.toFixed(2)}
                            </td>
                            <td
                              data-cell="Available Inventory"
                              style={{
                                backgroundColor:
                                  val.quantity.maximum.count <= 5
                                    ? "#FF8046"
                                    : "",
                              }}
                            >
                              {val.quantity.maximum.count}
                            </td>
                            <td
                              data-cell="Total Orders"
                              style={{
                                backgroundColor:
                                  val.quantity.maximum.count <= 5
                                    ? "#FF8046"
                                    : "",
                              }}
                            >
                              {val.totalSold}
                            </td>
                            <td
                              data-cell="Shipping Time"
                              style={{
                                backgroundColor:
                                  val.quantity.maximum.count <= 5
                                    ? "#FF8046"
                                    : "",
                              }}
                            >
                              {val["@ondc/org/time_to_ship"]}
                            </td>
                            <td
                              data-cell="Return Window"
                              style={{
                                backgroundColor:
                                  val.quantity.maximum.count <= 5
                                    ? "#FF8046"
                                    : "",
                              }}
                            >
                              {val["@ondc/org/return_window"]}
                            </td>
                            <td
                              data-cell="Published on"
                              style={{
                                backgroundColor:
                                  val.quantity.maximum.count <= 5
                                    ? "#FF8046"
                                    : "",
                              }}
                            >
                              {val.when.date}
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
                )}{" "}
                of <b>{prodcutsCount}</b> results
              </p>
            </>
          )}
        </div>

        <div className={DCss.hello}>helo</div>

        <div className="keys">
          <span>*</span>
          <div className={DCss.colorBox}></div>{" "}
          <span>: Low Products in Stock</span>
        </div>
      </div>
    </div>
  );
}
