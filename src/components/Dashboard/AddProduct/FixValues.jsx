import React, { useState, useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";

//component
import SelectTp1 from "./Input/SelectTp1";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";
import { Alert } from "./../../../MicroInteraction/Alert";

// state
import AuthContext from "../../../store/auth-context";

// css
import FCss from "./Css/Form.module.css";
import PrCss from "./Css/Lable.module.css";
import ItCss from "./Input/Css/InputType1.module.css";

export default function FixValues({ setData, showData }) {
  const [store, setStore] = useState([]);
  const [load, setLoad] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const loadInfo = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`/api/common/Store/GetStoreInfo`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setLoad(false);

        console.log(response.data.StoreID);

        setStore(response.data.StoreID);
      } else {
        setLoad(false);

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Unable to fetch Info",
          val: true,
        });
      }
    } catch (e) {
      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });
    }
  };

  const handleSelectChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...showData, [name]: value });
  };

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    console.log(store.cancellable);
  }, [store]);

  return (
    <>
      <p className={PrCss.AboutYou}>Additional Info</p>

      {load ? (
        <Load />
      ) : (
        <>
          {/* Cancellable */}
          <div className={ItCss.inpDiv}>
            <p className={ItCss.inputLabel}>Cancellable</p>

            <select
              name="ondcOrgcancellable"
              id=""
              className={ItCss.inp}
              onChange={handleSelectChange}
            >
              <option value="Selected" disabled hidden>
                Select
              </option>

              {store.cancellable ? (
                <>
                  <option value="true" selected>
                    True
                  </option>
                  <option value="false">False</option>
                </>
              ) : (
                <>
                  <option value="true">True</option>
                  <option value="false" selected>
                    False
                  </option>
                </>
              )}
            </select>
          </div>
          {/* Returnable */}
          <div className={ItCss.inpDiv}>
            <p className={ItCss.inputLabel}>Returnable</p>

            <select
              name="ondcOrgreturnable"
              id=""
              className={ItCss.inp}
              onChange={handleSelectChange}
            >
              <option value="Selected" disabled hidden>
                Select
              </option>

              {store.returnable ? (
                <>
                  <option value="true" selected>
                    True
                  </option>
                  <option value="false">False</option>
                </>
              ) : (
                <>
                  <option value="true">True</option>
                  <option value="false" selected>
                    False
                  </option>
                </>
              )}
            </select>
          </div>
          {/* Time To Ship */}
          <div className={ItCss.inpDiv}>
            <p className={ItCss.inputLabel}>Time To Ship</p>

            <select
              name="ondcOrgtime_to_ship"
              id=""
              className={ItCss.inp}
              onChange={handleSelectChange}
            >
              <option value="Selected" disabled hidden>
                Select
              </option>

              {store.TimeToShip ? (
                <>
                  <option value="true" selected>
                    True
                  </option>
                  <option value="false">False</option>
                </>
              ) : (
                <>
                  <option value="true">True</option>
                  <option value="false" selected>
                    False
                  </option>
                </>
              )}
            </select>
          </div>
          {/* Return Window  */}
          {/* Pickup Return  */}
          {/* Cash On Delivery */}
        </>
      )}

      <Alert variant={variants} val={setError} />
    </>
  );
}

FixValues.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
