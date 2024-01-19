import React, { useState, useEffect } from "react";

// components
import Display from "./product/Display";
import Filter from "./product/Filter";

// css
import pdtCSS from "./Css/products.module.css";

export default function Products() {
  const [filteredlist, setfilteredlist] = useState([]);

  return (
    <div className={pdtCSS.mdiv}>
      <div className={pdtCSS.filterVis}>
        <Filter filteredlist={filteredlist} setfilteredlist={setfilteredlist} />
      </div>
      <Display filteredlist={filteredlist} setfilteredlist={setfilteredlist} />
    </div>
  );
}
