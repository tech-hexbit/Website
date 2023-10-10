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

export default function Display({ filteredlist, setfilteredlist }) {
  const [load, setLoad] = useState(false);
  const [orderDel, setOrderDel] = useState([]);
  const [prodcutsCount, setProdcutsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [max, setmax] = useState(false);

  useEffect(() => {
    loadData();
  }, [currentPage]);

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
        setProdcutsCount(response?.data?.length);
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
        loadData();
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

  const maxPage = () => {
    if (prodcutsCount > 0) {
      if (currentPage === Math.ceil(prodcutsCount / 5)) {
        setmax(true);
      } else {
        setmax(false);
      }
    } else {
      setmax(true);
    }
  };

  return (
    <div className={DCss.mainDiv}>
      <div className={DCss.top}>
        <div className={DCss.search}>
          <input
            type="text"
            placeholder="Search your product here..."
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
            <p className={DCss.showingPTag}>
              Showing{" "}
              {filteredlist?.length <= 5 ? (
                <b>{filteredlist?.length} </b>
              ) : (
                <b>5</b>
              )}{" "}
              of <b>{prodcutsCount}</b> results
            </p>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={max}
          id="s"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
