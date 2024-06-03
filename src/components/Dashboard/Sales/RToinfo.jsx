import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// Css
import OLCss from "./Css/OrderLayUpdate.module.css";
import RTOCss from "./Css/RToinfo.module.css";

export default function RToinfo({ setReturn, rtoReturn, res }) {
  const [load, setLoad] = useState(false);
  const [list, setList] = useState([]);
  const [reason, setReason] = useState({ id: "", desc: "" });

  const authCtx = useContext(AuthContext);

  const returnRTO = async () => {
    console.log("RTO Request Send");

    try {
      let data = {
        OrderID: res._id,
        BuyerOrderID: res.OrderID,
      };

      const response = await axios.post(
        "/api/common/Order/order/cancel/rto",
        data,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      console.log(response.data);
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
          <div className={RTOCss.mDiv}>
            Return (RTO) Info
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
              className={RTOCss.closeBtn}
              onClick={() => {
                setReturn(false);
              }}
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>

          <div>
            <p>Select Reason Desc</p>

            <select name="desc" id="desc">
              <option value="00" selected hidden>
                Select
              </option>
              {list.length > 0 ? (
                <>
                  {list.map((val, key) => {
                    console.log(val);
                    return (
                      <option value={val.code} key={key}>
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

          <button onClick={returnRTO}>Submit</button>

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
      )}
    </>
  );
}

RToinfo.propTypes = {
  setReturn: PropTypes.func.isRequired,
  rtoReturn: PropTypes.bool.isRequired,
};
