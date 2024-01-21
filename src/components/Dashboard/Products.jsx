import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// MicroInteraction
import { Alert } from "./../../MicroInteraction/Alert";

// state
import AuthContext from "./../../store/auth-context";

// components
import Display from "./product/Display";
import Filter from "./product/Filter";

// css
import pdtCSS from "./Css/products.module.css";

export default function Products() {
  const [load, setLoad] = useState(false);
  const [filterData, setfilterData] = useState({
    category: [],
  });
  const [filteredlist, setfilteredlist] = useState({
    productList: [],
    length: 0,
  });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.post(
        "/api/common/product/all/false",
        filterData,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setfilteredlist({
          ...filteredlist,
          productList: response.data.orderList,
          length: response.data.length,
        });

        setLoad(false);
      } else {
        setLoad(false);

        console.log(e);
      }
    } catch (e) {
      setLoad(false);

      console.log(e);
    }
  };

  useEffect(() => {
    loadData();
  }, [, filteredlist]);

  return (
    <>
      <div className={pdtCSS.mdiv}>
        <div className={pdtCSS.filterVis}>
          <Filter
            load={load}
            filteredlist={filteredlist}
            setfilteredlist={setfilteredlist}
          />
        </div>
        <Display
          load={load}
          filteredlist={filteredlist}
          setfilteredlist={setfilteredlist}
        />
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
