import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";
import { Alert } from "./../../../MicroInteraction/Alert";

// state
import AuthContext from "./../../../store/auth-context";

// css
import DCss from "./Css/display.module.css";
import cardDisplay from "./Css/cardDisplay.module.css";

export default function Archive() {
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredlist, setfilteredlist] = useState({
    productList: [],
    prodcutsCount: 0,
  });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
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

      console.log(response.data);

      if (response.data.success) {
        setfilteredlist({
          ...filteredlist,
          productList: response.data.orderList,
          prodcutsCount: response.data.prodcutsCount,
        });

        setLoad(false);
      } else {
        setLoad(false);
      }
    } catch (e) {
      setLoad(false);

      console.log(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      Archive
      <div>
        {load ? (
          <div className="loadCenterDiv">
            <Load />
          </div>
        ) : (
          <div className={DCss.table}></div>
        )}
      </div>
    </div>
  );
}
