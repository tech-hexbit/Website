import React, { useState, useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";

//component
import InpTp1 from "./Input/InpTp1";
import InpTy2 from "./Input/InpTy2";
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
    if (store.length > 0) {
      console.log(store[0].Fssai);
    }
  }, [store]);

  return (
    <>
      <p className={PrCss.AboutYou}>Additional Info</p>

      {load ? (
        <Load />
      ) : (
        <>
          {store.length > 0 ? (
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

                  {store[0].Store[0].StoreID.cancellable ? (
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

                  {store[0].Store[0].StoreID.returnable ? (
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
              {store[0].Store[0].StoreID.returnable ? (
                <div className={ItCss.inpDiv}>
                  <p className={ItCss.inputLabel}>Return Window</p>

                  <select
                    name="ondcOrgreturn_window"
                    id=""
                    className={ItCss.inp}
                    onChange={handleSelectChange}
                  >
                    <option value="Selected" disabled hidden>
                      Select
                    </option>
                    <option value="P1D">1 Days</option>
                    <option value="P4D">4 Days</option>
                    <option value="P7D">7 Days</option>
                  </select>
                </div>
              ) : (
                ""
              )}

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

                  {store[0].Store[0].StoreID.TimeToShip ? (
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

              {/* Cash On Delivery */}
              <div className={ItCss.inpDiv}>
                <p className={ItCss.inputLabel}>Cash On Delivery(COD)</p>

                <select
                  name="ondcOrgavailable_on_cod"
                  id=""
                  className={ItCss.inp}
                  onChange={handleSelectChange}
                >
                  <option value="Selected" disabled hidden>
                    Select
                  </option>

                  {store[0].Store[0].StoreID.cod ? (
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

              {/* Pickup Return */}
              <div className={ItCss.inpDiv}>
                <p className={ItCss.inputLabel}>Pickup Return</p>

                <select
                  name="ondcOrgseller_pickup_return"
                  id=""
                  className={ItCss.inp}
                  onChange={handleSelectChange}
                >
                  <option value="Selected" disabled hidden>
                    Select
                  </option>

                  {store[0].Store[0].StoreID.PickupReturn ? (
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

              {/* Fulfillment ID */}
              <InpTp1
                type="text"
                Label="Fulfillment ID"
                showData={showData}
                setData={setData}
                field="fulfillment_id"
                placeholder="Fulfillment ID"
              />

              {/* Other FSSAI License No */}
              <InpTy2
                type="text"
                Label="Other FSSAI License Number"
                showData={showData}
                setData={setData}
                value={store[0].Fssai}
                field="other_FSSAI_license_no"
                placeholder="12345678901234"
              />

              {/* Importer FSSAI License No */}
              <InpTy2
                type="text"
                Label="Importer FSSAI License Number"
                showData={showData}
                setData={setData}
                value={store[0].Fssai}
                field="importer_FSSAI_license_no"
                placeholder="12345678901234"
              />

              {/* Brand Owner FSSAI License No */}
              <InpTy2
                type="text"
                Label="Brand Owner FSSAI License No"
                showData={showData}
                setData={setData}
                value={store[0].Fssai}
                field="brand_owner_FSSAI_license_no"
                placeholder="12345678901234"
              />
            </>
          ) : (
            <></>
          )}
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
