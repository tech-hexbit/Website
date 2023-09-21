import React from "react";

// components
import ProductColor from "./ProductColor";

// css
import CBss from "./Css/ColorBox.module.css";

export default function Box(props) {
  return (
    <div className={CBss.CBss}>
      <p className={CBss.subTitlePTag}>Color</p>
      <div>
        <ProductColor />
        <ProductColor />
        <ProductColor />
      </div>
    </div>
  );
}
