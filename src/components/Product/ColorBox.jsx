import React from "react";

// components
import ProductColor from "./ProductColor";

// css
import CBss from "./Css/ColorBox.module.css";

export default function Box(props) {
  return (
    <div className={CBss.CBss}>
      <p className={CBss.subTitlePTag}>Color</p>
      <div className={CBss.boxesDiv}>
        <ProductColor imgSrc="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" />
        <ProductColor imgSrc="https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" />
        <ProductColor imgSrc="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" />
      </div>
    </div>
  );
}
