import React, { useState, useEffect, useContext } from "react";

// components
import CategoriesTabs from "./Categories/CategoriesTabs";
import Sidecategoriestab from "./Categories/Sidecategoriestab";

// css
import Ccss from "./Css/Categories.module.css";
import osCss from "./Sales/Css/overallSales.module.css";

// state
import AuthContext from "../../store/auth-context";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

import axios from "axios";
export default function Categories() {
  const [load, setLoad] = useState(false);
  const [orderlist, setorderlist] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/common/Order/all", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setorderlist(response?.data?.orderList);

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
    <div>
      <div className={osCss.middlecontent}>
        <div className={Ccss.middle}></div>
        <div id="wrap" className={osCss.table}>
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
                      <th className={Ccss["sticky-col"]}>ID </th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Order</th>
                      <th>Published on</th>
                    </tr>
                    {orderlist?.map((val, key) => {
                      return (
                        <>
                          <tr key={key}>
                            <td>{val.OrderID}</td>
                            <td> ₹ {val.amount.toFixed(2)}</td>
                            <td>32</td>
                            <td>18</td>
                            <td>{val.when.date}</td>
                          </tr>
                        </>
                      );
                    })}
                  </>
                ) : (
                  <p className="NoOrders">No Orders</p>
                )}
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
