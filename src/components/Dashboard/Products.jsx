import React, { useState } from "react";

// components
import Display from "./product/Display";
import Filter from "./product/Filter";

// css
import pdtCSS from "./Css/products.module.css";

export default function Products() {
  // const [resarray, setresarray] = useState([]);
  const [filteredlist, setfilteredlist] = useState([]);
  return (
    <div className={pdtCSS.mdiv}>
      <Filter filteredlist={filteredlist} setfilteredlist={setfilteredlist} />
      <Display filteredlist={filteredlist} setfilteredlist={setfilteredlist} />
    </div>
  );
}
