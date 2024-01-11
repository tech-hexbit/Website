import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// components
import ProductsPage from "./../../ProductsPage/ProductsPage";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import DCss from "./Css/display.module.css";
import cardDisplay from "./Css/cardDisplay.module.css";
import Filter from "./Filter";

export default function Display({ filteredlist, setfilteredlist }) {
  const [max, setmax] = useState(false);
  const [load, setLoad] = useState(false);
  const [orderDel, setOrderDel] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [prodcutsCount, setProdcutsCount] = useState(0);
  const [showProductDel, setProductDel] = useState({ state: false, id: "" });
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    loadData();
  }, [, currentPage]);

  useEffect(() => {
    maxPage();
  }, [prodcutsCount, currentPage]);

  // useEffect(() => {
  //   fetchAllProducts();
  // }, []);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [, currentPage]);

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

  // filter all products
  // const fetchAllProducts = async () => {
  //   try {
  //     const response = await axios.get(`/api/common/product/allproducts`, {
  //       headers: { Authorization: `${authCtx.token}` },
  //     });
  //     if (response.data.success) {
  //       const fetchedProducts = response.data.products;
  //       setAllProducts(fetchedProducts);
  //       setfilteredlist(fetchedProducts);
  //     } else {
  //       console.log("Failed to fetch all products");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching all products:", error);
  //   }
  // };

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
    const searchTerm = event.target.value.toLowerCase();
    console.log("Search Term:", searchTerm);

    const updatedProducts = allProducts.filter((product) =>
      product?.descriptor?.name.toLowerCase().includes(searchTerm)
    );

    console.log("Filtered Products:", updatedProducts);

    if (searchTerm === "") {
      setfilteredlist(orderDel);
    } else {
      setfilteredlist(updatedProducts);
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
    <>
      <div
        className={DCss.mainDiv}
        id={showProductDel.state ? "yesProductsPage" : "noProductsPage"}
      >
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
              <button></button>
            </Link>
          </div>
        </div>
        <div className={DCss.hideFilter}>
          <Filter filteredlist={filteredlist} setfilteredlist={setfilteredlist} />
        </div>
        <div className={DCss.middle}>
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
              <div>
              {orderDel?.length > 0 ? (
                <>   
                  <div className={cardDisplay.cardMain} >
                    {filteredlist.map((val, key) => {
                      return(
                        <div className={cardDisplay.card}>
                          <div onClick={() => {
                                setProductDel({ state: true, id: val._id });
                              }}>
                            <div className={cardDisplay.imgDiv} >
                              <img src={val.descriptor.images[0]} className={cardDisplay.imgTag} />
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
                      )
                    })}
                  </div>
                </> ) : (
                  <p className="NoOrders">No Orders</p>
                )}
              </div>
              <p className={DCss.showingPTag}>
                Showing{" "}
                {filteredlist?.length <= 10 ? (
                  <b>{10 * (currentPage - 1) + filteredlist?.length} </b>
                ) : (
                  <b>5</b>
                )}{" "}
                of <b>{prodcutsCount}</b> results
              </p>
            </div>
          )}
        </div>
      
        <div className={DCss.cenDiv}>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={DCss.btnnb}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevrons-left"
            >
              <path d="m11 17-5-5 5-5" />
              <path d="m18 17-5-5 5-5" />
            </svg>
          </button>
          <span>{currentPage}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={max}
            className={DCss.btnnb}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevrons-right"
            >
              <path d="m6 17 5-5-5-5" />
              <path d="m13 17 5-5-5-5" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={showProductDel.state ? "yesProductsPage" : "noProductsPage"}
      >
        <ProductsPage id={showProductDel.id} setProductDel={setProductDel} />
      </div>
    </>
  );
}
