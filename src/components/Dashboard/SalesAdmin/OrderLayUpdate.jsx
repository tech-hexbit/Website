import React, { useState, useEffect, useContext } from "react";

// state
import AuthContext from "../../../store/auth-context";

// axios
import axios from "axios";

// components
import LayUpdate from "./LayUpdate";

// MicroInteraction
import Load from "../../../MicroInteraction/LoadBlack";

// Css
import OLCss from "./Css/OrderLayUpdate.module.css";

export default function OrderLayUpdate(props) {
  const [res, setres] = useState(null);
  const [load, setLoad] = useState(false);
  const [disableCon, setDisableCon] = useState({
    Accept: false,
    InProgress: false,
    Completed: false,
    Cancelled: false,
  });

  const authCtx = useContext(AuthContext);

  const loadOrderdel = async (id) => {
    setLoad(true);

    try {
      const response = await axios.get(`/api/common/order/details/${id}`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setLoad(false);

        setres(response.data.OrderDetail);
      } else {
        setLoad(false);

        console.log("Error");
      }
    } catch (e) {
      setLoad(false);

      console.log(e);
    }
  };

  // const checkItemsInfo = async () => {
  //   const itemStates = res.Items.map((item) => item.state);

  //   let curr = {
  //     Accept: false,
  //     InProgress: false,
  //     Completed: false,
  //     Cancelled: false,
  //   };

  //   for (let i = 0; i < itemStates.length; i++) {
  //     if (itemStates[i] === "In-progress") console.log(itemStates[i]);
  //   }
  // };

  useEffect(() => {
    loadOrderdel(props.id);
  }, [props.id]);

  // useEffect(() => {
  //   res && checkItemsInfo();
  // }, [res]);

  return (
    <>
      <div className={OLCss.mDiv}>
        <div className={OLCss.contendDiv}>
          <p className={OLCss.UpdateOrderPTag}>UPDATE ORDER STATUS</p>

          {/* Close Btn */}
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
            class="lucide lucide-x"
            className={OLCss.closeBtn}
            onClick={() => {
              props.setEdit(false);
            }}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>

          {/* <div className={OLCss.BtnDivMain}>
            <div className={OLCss.BtnDiv} id={OLCss.Accept}>
              Accept
            </div>
            <div className={OLCss.BtnDiv} id={OLCss.InProgress}>
              In-progress
            </div>
            <div className={OLCss.BtnDiv} id={OLCss.Completed}>
              Completed
            </div>
            <div className={OLCss.BtnDiv} id={OLCss.Cancelled}>
              Cancelled
            </div>
          </div> */}

          <div className={OLCss.ProductDelTableDiv}>
            <p className={OLCss.ProductDelPTag}>Product details</p>

            <div id="wrap" className={OLCss.tableCat}>
              {load ? (
                <div className="loadCenterDiv">
                  <Load />
                </div>
              ) : (
                <>
                  <table
                    className={OLCss.tableCatTTag}
                    style={{ borderCollapse: "collapse" }}
                  >
                    {res ? (
                      <>
                        <tr>
                          <th>Name</th>
                          <th>Product ID</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Status</th>
                          <th>Total Amount</th>
                        </tr>

                        {res.Items?.map((val, key) => {
                          return (
                            <>
                              <tr key={key}>
                                <td data-cell="Name">
                                  <div className={OLCss.titleItemDiv}>
                                    <img
                                      className={OLCss.itemImg}
                                      src={val.ItemID.descriptor.symbol}
                                      alt=""
                                    />
                                    {val.ItemID.descriptor.name}
                                  </div>
                                </td>
                                <td data-cell="Product ID">
                                  {val.ItemID._id.slice(-4)}
                                </td>
                                <td data-cell="Price">
                                  ₹ {val.ItemID.price.maximum_value.toFixed(2)}
                                </td>
                                <td data-cell="Quantity">{val.quantity}</td>
                                <LayUpdate
                                  id={props.id}
                                  ItemID={val.ItemID._id}
                                  state={val.state}
                                  setLoadDataState={props.setLoadDataState}
                                  loadDataState={props.loadDataState}
                                  setEdit={props.setEdit}
                                />
                                <td data-cell="Total Amount">
                                  ₹{" "}
                                  {(
                                    val.ItemID.price.maximum_value *
                                    val.quantity
                                  ).toFixed(2)}
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <div className="loadCenterDiv">No Orders</div>
                    )}
                  </table>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
