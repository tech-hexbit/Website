import React, { useState, useEffect, useContext } from "react";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// components
import RToinfo from "./RToinfo";
import LayUpdate from "./LayUpdate";
import PartialCancel from "./PartialCancel";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// Css
import OLCss from "./Css/OrderLayUpdate.module.css";

export default function OrderLayUpdate(props) {
  const [res, setres] = useState(null);
  const [load, setLoad] = useState(false);
  const [dataCal, setDataCal] = useState(false);
  const [rtoCancel, setCancel] = useState(false);
  const [rtoReturn, setReturn] = useState(false);
  const [upAll, setUpAll] = useState({
    code: 0,
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

  const updateMany = async (value) => {
    let codeVal = 0;

    if (value === "Accepted") {
      if (upAll.code < 1) {
        console.log("Accepted");
        codeVal = 1;
      }
    }

    if (value === "In-progress") {
      if (upAll.code === 1) {
        console.log("In-progress");
        codeVal = 2;
      }
    }

    if (value === "Completed") {
      if (upAll.code === 2) {
        console.log("Completed");
        codeVal = 3;
      }
    }

    if (value === "Cancelled") {
      if (upAll.code === 0 || upAll.code === 1) {
        console.log("Cancelled");
        codeVal = 4;
      }
    }

    if (value === "Return") {
      if (upAll.code === 4) {
        console.log("Return");
        codeVal = 5;
      }
    }

    try {
      setLoad(true);

      let data = {
        id: res._id,
        code: codeVal,
      };

      const response = await axios.post(
        "/api/common/Order/UpdateStateAll",
        data,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setLoad(false);

        props.setLoadDataState(!props.loadDataState);
      } else {
        setLoad(false);

        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Unable to Update",
        });
      }
    } catch (error) {
      console.log(error);

      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Unable to Update",
      });
    }
  };

  useEffect(() => {
    loadOrderdel(props.id);
  }, [props.id]);

  useEffect(() => {
    if (res) {
      let lowestCode = Infinity;

      for (let i = 0; i < res.Items.length; i++) {
        if (res.Items[i].code < lowestCode) {
          lowestCode = res.Items[i].code;
        }
      }

      setUpAll({
        ...upAll,
        code: lowestCode,
      });
    }
  }, [res]);

  return (
    <>
      <div className={OLCss.contendDivDel}>
        <p className={OLCss.UpdateOrderPTag}>UPDATE ORDER STATUS</p>

        <div className={OLCss.BtnDivMain}>
          <div
            className={OLCss.BtnDiv}
            id={upAll.code < 1 ? OLCss.Accept : OLCss.disable1}
            onClick={() => {
              updateMany("Accepted");
            }}
          >
            Accept
          </div>

          <div
            className={OLCss.BtnDiv}
            id={upAll.code === 1 ? OLCss.InProgress : OLCss.disable2}
            onClick={() => {
              updateMany("In-progress");
            }}
          >
            In-progress
          </div>
          <div
            className={OLCss.BtnDiv}
            id={upAll.code === 2 ? OLCss.Completed : OLCss.disable3}
            onClick={() => {
              updateMany("Completed");
            }}
          >
            Completed
          </div>
          <div
            className={OLCss.BtnDiv}
            id={
              upAll.code === 0 || upAll.code === 1
                ? OLCss.Cancelled
                : OLCss.disable4
            }
            onClick={() => {
              // updateMany("Cancelled");
              setDataCal(!dataCal);
            }}
          >
            Cancelled
          </div>

          <div
            className={OLCss.BtnDiv}
            onClick={() => {
              setCancel(true);
              setReturn(false);
            }}
          >
            Partial Cancel
          </div>

          <div
            className={OLCss.BtnDiv}
            onClick={() => {
              setReturn(true);
              setCancel(false);
            }}
          >
            Initiate RTO
          </div>
        </div>

        {rtoReturn && (
          <RToinfo setReturn={setReturn} rtoReturn={rtoReturn} res={res} />
        )}

        {rtoCancel && (
          <>
            <PartialCancel
              data={res}
              setCancel={setCancel}
              rtoCancel={rtoCancel}
            />
          </>
        )}

        {!rtoReturn && !rtoCancel && (
          <>
            {/* {dataCal ? (
              <PartialCancel data={res} />
            ) : ( */}
            <div className={OLCss.ProductDelTableDiv}>
              <p className={OLCss.ProductDelPTag}>Product details</p>

              <div id="wrap" className={OLCss.tableCat}>
                {load ? (
                  <div className="loadCenterDiv">
                    <Load />
                  </div>
                ) : (
                  <>
                    <table className={OLCss.tableCatTTagDel} style={{}}>
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
                                <tr key={key} className={OLCss.saleRes}>
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
                                    ₹{" "}
                                    {val.ItemID.price.maximum_value.toFixed(2)}
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
            {/* )} */}
          </>
        )}
      </div>
    </>
  );
}
