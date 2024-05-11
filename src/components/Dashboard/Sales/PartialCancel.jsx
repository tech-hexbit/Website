import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// css
import PCCss from "./Css/PartialCancel.module.css";

export default function PartialCancel({ data }) {
  const [load, setLoad] = useState(false);
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

    setLoad(true);

    try {
      console.log("response");
      // const res = await fetch(
      //   `${import.meta.env.VITE_SERVER_ONDC_URL}/update/partial/Cancel`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ orderID: data._id, item: itemsList }),
      //   }
      // );

      let showData = {
        orderID: data._id,
        item: itemsList,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_ONDC_URL}/update/partial/Cancel`,
        showData,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      console.log(response);

      // const r = await res.json();

      // console.log(r);
    } catch (error) {
      console.log(error);

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

  return (
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

      <button className={PCCss.saveBtn} onClick={updatePartialCan}>
        Save
      </button>
    </>
  );
}

PartialCancel.propTypes = {
  data: PropTypes.object.isRequired,
};
