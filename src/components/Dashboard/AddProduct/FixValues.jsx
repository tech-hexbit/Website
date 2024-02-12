import React, { useState, useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/Load";
import { Alert } from "./../../../MicroInteraction/Alert";

// state
import AuthContext from "../../../store/auth-context";

// css
import PrCss from "./Css/Lable.module.css";

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

  useEffect(() => {
    loadInfo();
  }, []);

  return (
    <>
      <p className={PrCss.AboutYou}>Additional Info</p>

      <Alert variant={variants} val={setError} />
    </>
  );
}

FixValues.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
