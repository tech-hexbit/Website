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
  const [orderNumber, setOrderNumber] = useState(0);
  const [orderDel, setOrderDel] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(
        "/api/website/DashBoard/Revenue/topSellingproducts",
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setOrderDel(response.data.topItems);
        setOrderNumber(response.data.topItems?.length);

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
                  <th id={BSCss.th} className={BSCss.sales}>
                    Sales
                  </th>
                  {/* <th id={BSCss.th}>Ratings</th> */}
                </tr>

                {orderDel ? (
                  <>
                    {orderDel.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td data-cell="" id={BSCss.td} className="prod">
                            <div className={BSCss.col1}>
                              <div className={BSCss.image}>
                                <img
                                  src={val.descriptor.images[0]}
                                  className={BSCss.imageCenter}
                                />
                              </div>
                              <div className={BSCss.BusinessNameSel}>
                                {val.descriptor.name}
                              </div>
                            </div>
                          </td>
                          <td data-cell="Amount" id={BSCss.td}>
                            {val.totalSold}
                          </td>
                          {/* <td data-cell="Ratings" id={BSCss.td}>
                            {val.rating.toFixed(1)}
                          </td> */}
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  "No Data"
                )}
              </table>

              <div className={BSCss.show}>
                Showing
                {orderNumber <= 5 ? <b> {orderNumber} </b> : <b>5</b>}
                of <b>{orderNumber}</b> results
              </div>
            </div>
          ) : (
            <p className={BSCss.NoOrders}>No Orders</p>
          )}
        </>
      )}
    </div>
  );
}
