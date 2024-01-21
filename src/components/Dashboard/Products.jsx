import React, { useState, useEffect } from "react";

// components
import Display from "./product/Display";
import Filter from "./product/Filter";

// css
import pdtCSS from "./Css/products.module.css";

export default function Products() {
  const [load, setLoad] = useState(false);
  const [filteredlist, setfilteredlist] = useState({
    productList: [],
    length: 0,
  });

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/common/product/all/false", {
        headers: { Authorization: `${authCtx.token}` },
      });

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
    console.log(filteredlist);
  }, [filteredlist]);

  return (
    <div className={pdtCSS.mdiv}>
      <div className={pdtCSS.filterVis}>
        <Filter filteredlist={filteredlist} setfilteredlist={setfilteredlist} />
      </div>
      <Display filteredlist={filteredlist} setfilteredlist={setfilteredlist} />
    </div>
  );
}
