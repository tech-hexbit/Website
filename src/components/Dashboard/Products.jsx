import React from "react";

// components
import Display from "./product/Display";
import Filter from "./product/Filter";

// css
import pdtCSS from "./Css/products.module.css";

export default function Products() {
  return (
    <div className={pdtCSS.mdiv}>
      <Filter />
      <Display />
    </div>
  );
}
