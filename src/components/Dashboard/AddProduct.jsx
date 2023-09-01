import React from "react";

// components
import Form from "./AddProduct/Form";

// css
import ApCss from "./Css/AddProduct.module.css";

export default function AddProduct() {
  return (
    <div className={ApCss.mDiv}>
      <p className={ApCss.AddHPTag}>Add Product</p>
      <Form />
    </div>
  );
}
