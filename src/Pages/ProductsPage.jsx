import React from "react";

// components
import Box from "./../components/Product/Box";

// css
import PPCss from "./Css/ProductPage.module.css";

export default function ProductsPage() {
  return (
    <div className={PPCss.mDiv}>
      <p className={PPCss.AddHPTag}>Product Details</p>

      <div className={PPCss.divDiv}>
        <div className={PPCss.leftDiv}>
          <img
            src="https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
            alt=""
            className={PPCss.productImg}
          />
        </div>
        <div className={PPCss.rightDiv}>
          <p className={PPCss.titleName}>Adidas Mens Restound M Running Shoe</p>

          <p className={PPCss.pID}>Product id: 229FR1</p>
          <p className={PPCss.pSeller}>Seller: Adidas</p>
          <p className={PPCss.pPublished}>
            Seller: Adidas Published on: 10 March 2022
          </p>

          <div className={PPCss.boxmDiv}>
            <Box title="Stock" value={35} />
            <Box title="Stock" value={35} />
            <Box title="Stock" value={35} />
            <Box title="Stock" value={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
