import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

// state
import AuthContext from "./../../../store/auth-context";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// axios
import axios from "axios";

// css
import RTOCss from "./Css/RToinfo.module.css";
import PCCss from "./Css/PartialCancel.module.css";

export default function PartialCancel({ setReturn, rtoReturn, data }) {
  const [load, setLoad] = useState(false);
  const [list, setList] = useState([]);
  const [reason, setReason] = useState({ id: "", desc: "" });
  const [itemsList, setItemsList] = useState([]);

  const authCtx = useContext(AuthContext);

  const handleCheckboxChange = (itemId, checked) => {
    if (checked) {
      setItemsList((prevItemsList) => [...prevItemsList, { itemId }]);
    } else {
      setItemsList((prevItemsList) =>
        prevItemsList.filter((item) => item.itemId !== itemId)
      );
    }
  };

  const updatePartialCan = async () => {
    if (itemsList.length === 0) {
      authCtx.showAlert({
        mainColor: "#FFF4E5",
        secondaryColor: "#FFA117",
        symbol: "warning",
        title: "Warning",
        text: "Kindly atleast select 1 item",
      });

      return;
    }

    if (reason.id === "" || reason.desc === "") {
      authCtx.showAlert({
        mainColor: "#FFF4E5",
        secondaryColor: "#FFA117",
        symbol: "warning",
        title: "Warning",
        text: "Kindly atleast return reason",
      });

      return;
    }

    setLoad(true);

    try {
      let showData = {
        orderID: data._id,
        item: itemsList,
        return_reason_id: reason.id,
        descReason: reason.desc,
        BuyerOrderID: data.OrderID,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_ONDC_URL}/update/partial/Cancel`,
        showData,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      console.log(response);

      setLoad(false);

      setReturn(!rtoReturn);
    } catch (error) {
      console.log(error);
      console.log(error.response.data);

      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Poduct Addition Failed",
      });
    }
  };

  const fetchDesc = async () => {
    try {
      const response = await axios.get(`/api/common/Order/order/desc`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setList(response.data.results);
      }
    } catch (error) {
      console.log(error);

      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "Unable to Fetch",
      });
    }
  };

  const descCurr = async (e) => {
    const selectedCode = e.target.value;
    const selectedReason = list.find((item) => item.Code === selectedCode);

    if (selectedReason) {
      setReason({
        id: selectedReason.Code,
        desc: selectedReason.Reason,
      });
    }
  };

  useEffect(() => {
    fetchDesc();
  }, []);

  return (
    <>
      {load ? (
        <div className="loadCenterDiv">
          <Load />
        </div>
      ) : (
        <>
          <div className={PCCss.headDiv}>
            <p className={PCCss.headPTag}>Partial Cancel</p>
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
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
          <div className={PCCss.Line}></div>

          {data ? (
            <>
              {data.Items?.map((val, key) => {
                return (
                  <div className={PCCss.mapDiv} key={key}>
                    <div className={PCCss.mapDivChild}>
                      <img
                        className={PCCss.itemImg}
                        src={val.ItemID.descriptor.symbol}
                        alt=""
                      />
                      <div>
                        <div>
                          <b>{val.ItemID.descriptor.name}</b>
                        </div>
                        <div>
                          <span className={PCCss.spanQty}>Qty</span>{" "}
                          <span className={PCCss.spanQty}>{val.quantity}</span>
                          {/* <input
                        type="number"
                        name=""
                        id=""
                        value={val.quantity}
                        min={0}
                        max={val.quantity}
                        onChange={onChangeHandle}
                      /> */}
                        </div>
                      </div>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={itemsList.some(
                          (item) => item.itemId === val.ItemID
                        )}
                        onChange={(e) =>
                          handleCheckboxChange(val.ItemID, e.target.checked)
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="loadCenterDiv">No Orders</div>
          )}

          <>
            <div className={RTOCss.mDiv}>Return (RTO) Info</div>

            <div>
              <p>Select Reason Desc</p>

              <select name="desc" id="desc" onChange={descCurr}>
                <option value="00" selected hidden>
                  Select
                </option>
                {list.length > 0 ? (
                  <>
                    {list.map((val, key) => {
                      return (
                        <option value={val.Code} key={key}>
                          {val.Reason}
                        </option>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </select>
            </div>

            <div>
              {reason.id === "" ? (
                ""
              ) : (
                <div>
                  <p>Reason ID </p> <span>{reason.id}</span>
                </div>
              )}

              {reason.desc === "" ? (
                ""
              ) : (
                <div>
                  <p>Reason desc </p> <span>{reason.desc}</span>
                </div>
              )}
            </div>
          </>

          <button className={PCCss.saveBtn} onClick={updatePartialCan}>
            Save
          </button>
        </>
      )}
    </>
  );
}

PartialCancel.propTypes = {
  data: PropTypes.object.isRequired,
};
