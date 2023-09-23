import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import DCss from "./Css/display.module.css";

// img
import image from "../../../assets/dashboard/tablerow.png";

export default function Display() {
  const [orderDel, setOrderDel] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/common/product/all", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        console.log(response.data.orderList);

        setOrderDel(response.data.orderList);

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
    <div className={DCss.mainDiv}>
      <div className={DCss.top}>
        <div className={DCss.search}>
          <input type="text" placeholder="Search your product here.." />
        </div>
        <div className={DCss.button}>
          <Link to="/me/addProduct" className="LinkStyle">
            <button>+ Add product</button>
          </Link>
        </div>
      </div>
      {load ? (
        ""
      ) : (
        <div className={DCss.table}>
          <table style={{ borderCollapse: "collapse" }}>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th id={DCss.stock}>Stock</th>
              <th id={DCss.orders}>Orders</th>
              <th id={DCss.published}>Published on</th>
              <th>Action</th>
            </tr>
            {orderDel?.length > 0 ? (
              <>
                {orderDel.map((val, key) => {
                  console.log(val);
                  return (
                    <>
                      <tr key={key}>
                        <td id={DCss.checkBox}>
                          <input type="checkbox" name="" id="" />
                        </td>
                        <td className={DCss.row} id={DCss.col1}>
                          <Link
                            to={`/products/${val._id}`}
                            className="LinkStyle"
                          >
                            <div className={DCss.col1}>
                              <div className={DCss.image}>
                                <img src={val.descriptor.images[0]} />
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
                          {val.price.value}
                        </td>
                        <td className={DCss.row} id={DCss.stock}>
                          {val.quantity.maximum.count}
                        </td>
                        <td className={DCss.row} id={DCss.orders}>
                          {val.fulfillment_id}
                        </td>
                        <td className={DCss.row}>
                          <div className={DCss.col5}>
                            <div className={DCss.textTop}>{val.when.date}</div>
                            <div className={DCss.textBottom}>
                              {val.when.time}
                            </div>
                          </div>
                        </td>
                        <td className={DCss.row} id={DCss.col6}>
                          <div className={DCss.dots}>
                            <div style={{ marginTop: "-5px" }}>...</div>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </>
            ) : (
              <p>No Orders</p>
            )}
          </table>
        </div>
      )}
      <div className={DCss.bottom}>
        <div></div>
        <div className={DCss.pages}>
          <div className={DCss.arrow}>{`<<`}</div>
          <div className={DCss.numbers}>
            <div className={DCss.active}>1</div>
            <div className={DCss.inactive}>2</div>
            <div className={DCss.inactive}>3</div>
          </div>
          <div className={DCss.arrow}>{`>>`}</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
