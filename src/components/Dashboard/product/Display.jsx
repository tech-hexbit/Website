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
import { Trash2 } from "lucide-react";

export default function Display({ filteredlist, setfilteredlist }) {
  const [orderDel, setOrderDel] = useState([]);
  const [load, setLoad] = useState(false);
  const [updatedproduct, setupdatedproduct] = useState([]);

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
        setOrderDel(response?.data?.orderList);
        setfilteredlist(response?.data?.orderList);
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

  const deleteproduct = async (_id) => {
    try {
      const response = await axios.delete(`/api/common/product/delete/${_id}`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.status === 200) {
        setupdatedproduct(filteredlist.filter((p) => p._id != _id));
        setfilteredlist(updatedproduct);
        console.log("deleted");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filter = (event) => {
    var updatedprod = orderDel.filter((f) =>
      f?.descriptor?.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    if (event.target.value === "") {
      setfilteredlist(orderDel);
    } else {
      setfilteredlist(updatedprod);
    }
  };

  return (
    <div className={DCss.mainDiv}>
      <div className={DCss.top}>
        <div className={DCss.search}>
          <input
            type="text"
            placeholder="Search your product here.."
            onChange={filter}
          />
        </div>
        <div className={DCss.button}>
          <Link to="/me/addProduct" className={DCss.LinkStyle}>
            <button>+ Add product</button>
          </Link>
        </div>
      </div>

      <div className={DCss.middle}>
        {load ? (
          <div className="loadCenterDiv">
            <Load />
          </div>
        ) : (
          <div className={DCss.table}>
            <table style={{ borderCollapse: "collapse" }}>
              {orderDel?.length > 0 ? (
                <>
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th id={DCss.stock}>Stock</th>
                    <th id={DCss.orders}>Orders</th>
                    <th id={DCss.published}>Published on</th>
                    <th>Action</th>
                  </tr>
                  {filteredlist.map((val, key) => {
                    return (
                      <>
                        <tr key={key}>
                          <td id={DCss.checkBox}>
                            <input type="checkbox" name="" id="" />
                          </td>
                          <td className={DCss.row} id={DCss.col1}>
                            <Link
                              to={`/products/${val._id}`}
                              className={DCss.LinkStyle}
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
                              <div className={DCss.textTop}>
                                {val.when.date}
                              </div>
                              <div className={DCss.textBottom}>
                                {val.when.time}
                              </div>
                            </div>
                          </td>
                          <td className={DCss.row} id={DCss.col6}>
                            <div className={DCss.dots}>
                              <div
                                style={{ marginTop: "-5px" }}
                                onClick={() => deleteproduct(val._id)}
                              >
                                <Trash2 />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </>
              ) : (
                <p className={DCss.NoOrders}>No Orders</p>
              )}
            </table>
          </div>
        )}
      </div>

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
