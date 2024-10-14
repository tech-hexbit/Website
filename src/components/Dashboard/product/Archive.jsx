import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// components
import DeleteFun from "./DeleteFun";
import Header from "./../MainParts/Header";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// state
import AuthContext from "./../../../store/auth-context";

// css
import DCss from "./Css/display.module.css";
import cardDisplay from "./Css/cardDisplay.module.css";

export default function Archive({ setArchive }) {
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredlist, setfilteredlist] = useState({
    productList: [],
    prodcutsCount: 0,
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

      if (response.data.success) {
        setfilteredlist({
          productList: response.data.orderList,
          prodcutsCount: response.data.prodcutsCount,
        });
      }
    } catch (e) {
      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
      });
      console.log(e);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [currentPage]); // Load data when currentPage changes

  const totalPages = Math.ceil(filteredlist.prodcutsCount / 10); // Adjust 10 based on items per page

  return (
    <>
      <div>
        <div className={DCss.arcHeaderDiv}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${DCss.arcHeadBackIcon}`}
            onClick={() => {
              setArchive(false);
            }}
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <Header name="Archive" />
        </div>

        <div className={DCss.arcMain}>
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
                {filteredlist.productList.length > 0 && (
                  <>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th id={DCss.stock}>Stock</th>
                      <th id={DCss.orders}>Orders</th>
                      <th id={DCss.published}>Published on</th>
                      <th>Action</th>
                    </tr>
                    {filteredlist.productList.map((val) => (
                      <tr key={val._id}>
                        <td className={DCss.row} id={DCss.col1}>
                          <Link to={`/me/products/${val._id}`} className="LinkStyle">
                            <div className={DCss.col1}>
                              <div className={DCss.image}>
                                <img src={val.descriptor.images[0]} className={DCss.imgTag} />
                              </div>
                              <div className={DCss.col1Text}>
                                <div className={DCss.textTop}>{val.descriptor.name}</div>
                                <div className={DCss.textBottom}>Category : {val.category_id}</div>
                              </div>
                            </div>
                          </Link>
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
                            <div className={DCss.textTop}>{val.when.date}</div>
                            <div className={DCss.textBottom}>{val.when.time} IST</div>
                          </div>
                        </td>
                        <td className={DCss.row} id={DCss.col6}>
                          <DeleteFun id={val._id} loadData={loadData} code={1} />
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </table>

              <p className={DCss.showingPTag}>
                Showing <b>{filteredlist.productList.length}</b> of <b>{filteredlist.prodcutsCount}</b> results
              </p>

              {/* Pagination Controls */}
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevrons-left"
                  >
                    <path d="m11 17-5-5 5-5" />
                    <path d="m18 17-5-5 5-5" />
                  </svg>
                </button>
                <span>{currentPage}</span>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={DCss.btnnb}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevrons-right"
                  >
                    <path d="m6 17 5-5-5-5" />
                    <path d="m13 17 5-5-5-5" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

Archive.propTypes = {
  setArchive: PropTypes.func.isRequired,
};
