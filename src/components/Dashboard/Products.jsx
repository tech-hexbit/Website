import React, { useState } from "react";

// components
import Display from "./product/Display";
import Filter from "./product/Filter";

// css
import pdtCSS from "./Css/products.module.css";

export default function Products() {
  const [resarray, setresarray] = useState([]);
  return (
    <div className={pdtCSS.mdiv}>
      <Filter resarray = {resarray} setresarray = {setresarray}/>
      <Display resarray = {resarray} />
    </div>
  );
}
