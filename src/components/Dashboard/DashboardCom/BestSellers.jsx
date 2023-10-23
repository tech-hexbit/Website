import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "./../../../store/auth-context";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import BSCss from "./css/bestSeller.module.css";

export default function BestSellers() {
  const [orderDel, setOrderDel] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/website/DashBoard/sellersList", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setOrderDel(response.data.seller);

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

  useEffect(() => {
    console.log(orderDel);
  }, [orderDel]);

  return (
    <div className={BSCss.mainDiv}>
      <div className={BSCss.heading}>Best sellers</div>

      {load ? (
        <div className={BSCss.loadCenterDiv}>
          <Load />
        </div>
      ) : (
        <>
          {orderDel?.length > 0 ? (
            <div className={BSCss.table}>
              <table className={BSCss.tableTag}>
                <tr>
                  <th id={BSCss.th} className={BSCss.product}>
                    Product
                  </th>
                  <th id={BSCss.th} className={BSCss.amount}>
                    Amount
                  </th>
                  <th id={BSCss.th} className={BSCss.sales}>
                    Sales
                  </th>
                  <th id={BSCss.th} className={BSCss.stock}>
                    Stock
                  </th>
                  <th id={BSCss.th}>Ratings</th>
                </tr>

                {orderDel ? (
                  <>
                    {orderDel.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td
                            data-cell="Product"
                            id={BSCss.td}
                            className="prod"
                          >
                            <div className={BSCss.col1}>
                              <div className={BSCss.image}>
                                <img
                                  src={val.image}
                                  className={BSCss.imageCenter}
                                />
                              </div>
                              <div>{val.BusinessName}</div>
                            </div>
                          </td>
                          <td data-cell="Amount" id={BSCss.td}>
                            {val.revenue}
                          </td>
                          <td data-cell="Sales" id={BSCss.td}>
                            59k
                          </td>
                          <td data-cell="Stock" id={BSCss.td} className="stock">
                            <div>
                              <div>3</div>
                              {"Instock" == "Instock" && (
                                <div style={{ color: "#4BB543" }}>
                                  {val.col4Bottom}
                                </div>
                              )}
                              {/* {"Out of stock" == "Out of stock" && (
                                <div style={{ color: "#D0342C" }}>
                                  {val.col4Bottom}
                                </div>
                              )} */}
                            </div>
                          </td>
                          <td data-cell="Ratings" id={BSCss.td}>
                            5.0
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  "No Data"
                )}
              </table>
            </div>
          ) : (
            <p className={BSCss.NoOrders}>No Orders</p>
          )}
        </>
      )}
    </div>
  );
}
