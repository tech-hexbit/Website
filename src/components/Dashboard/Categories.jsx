import React, { useState, useEffect, useContext } from "react";

// components
import CategoriesTabs from "./Categories/CategoriesTabs";
import Sidecategoriestab from "./Categories/Sidecategoriestab";
// css
import Ccss from "./Css/Categories.module.css";
import osCss from "./Sales/Css/overallSales.module.css";

import AuthContext from "../../store/auth-context";

import axios from "axios";
export default function Categories() {
  const [current, setCurrent] = useState("Ecommerce");
  const [itemid, setitemid] = useState([]);
  const [orderlist, setorderlist] = useState([]);
  const [active, setActive] = useState({
    pdt: true,
    fashion: false,
    grocery: false,
    furniture: false,
  });

  useEffect(() => {
    loadData();
  }, []);
  const authCtx = useContext(AuthContext);
  const loadData = async () => {
    try {
      const response = await axios.get("/api/common/Order/all", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        console.log(orderlist);

        setorderlist(response?.data?.orderList);
      } else {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className={Ccss.mDIvTabs}>
        <CategoriesTabs
          name="Ecommerce"
          setCurrent={setCurrent}
          current={current}
        />
        <CategoriesTabs
          name="Service providers"
          setCurrent={setCurrent}
          current={current}
        />
        <CategoriesTabs
          name="Education"
          setCurrent={setCurrent}
          current={current}
        />
        <CategoriesTabs name="Food" setCurrent={setCurrent} current={current} />
        <CategoriesTabs
          name="Automobile"
          setCurrent={setCurrent}
          current={current}
        />
      </div>
      <div className={osCss.middlecontent}>
        <div className={osCss.middle}>
          <div className={Ccss.mDIvSideTabs}>
            <Sidecategoriestab
              name="Fashion"
              setCurrent={setCurrent}
              current={current}
            />
            <Sidecategoriestab
              name="Groccery"
              setCurrent={setCurrent}
              current={current}
            />
            <Sidecategoriestab
              name="Furniture"
              setCurrent={setCurrent}
              current={current}
            />
            <Sidecategoriestab
              name="Electronics"
              setCurrent={setCurrent}
              current={current}
            />
            <Sidecategoriestab
              name="Shoes"
              setCurrent={setCurrent}
              current={current}
            />
          </div>
        </div>
        <div id="wrap" className={osCss.table}>
          <table style={{ borderCollapse: "collapse" }}>
            {orderlist.length > 0 ? (
              <>
                <tr>
                  <th></th>
                  <th className={Ccss["sticky-col"]}>
                    Product{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="14"
                      viewBox="0 0 9 14"
                      fill="none"
                    >
                      <path
                        d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                        fill="#777777"
                      />
                      <path
                        d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                        fill="#777777"
                      />
                    </svg>
                  </th>
                  <th>
                    Price{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="14"
                      viewBox="0 0 9 14"
                      fill="none"
                    >
                      <path
                        d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                        fill="#777777"
                      />
                      <path
                        d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                        fill="#777777"
                      />
                    </svg>
                  </th>
                  <th>
                    Stock{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="14"
                      viewBox="0 0 9 14"
                      fill="none"
                    >
                      <path
                        d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                        fill="#777777"
                      />
                      <path
                        d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                        fill="#777777"
                      />
                    </svg>
                  </th>
                  <th>
                    Orders{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="14"
                      viewBox="0 0 9 14"
                      fill="none"
                    >
                      <path
                        d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                        fill="#777777"
                      />
                      <path
                        d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                        fill="#777777"
                      />
                    </svg>
                  </th>
                  <th>
                    Published on{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="14"
                      viewBox="0 0 9 14"
                      fill="none"
                    >
                      <path
                        d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                        fill="#777777"
                      />
                      <path
                        d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                        fill="#777777"
                      />
                    </svg>
                  </th>

                  <th>
                    Action{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="14"
                      viewBox="0 0 9 14"
                      fill="none"
                    >
                      <path
                        d="M0 5.62576H9L4.5 0.732422L0 5.62576Z"
                        fill="#777777"
                      />
                      <path
                        d="M4.5 13.2664L9 8.37305H0L4.5 13.2664Z"
                        fill="#777777"
                      />
                    </svg>
                  </th>
                </tr>
                {orderlist?.map((val, key) => {
                  return (
                    <>
                      <tr key={key}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>#{"Asus Rog"}</td>
                        <td> {val.amount}</td>
                        <td>32</td>
                        <td>18</td>
                        <td>{val.when.date}</td>

                        <td>
                          <div className={osCss.dots}>
                            <div style={{ marginTop: "-5px" }}>...</div>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </>
            ) : (
              <p className={osCss.NoOrder}>No Orders</p>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
