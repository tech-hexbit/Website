// import React from 'react'

import UserSideBar from "../../components/userLoggedIn/UserSideBar";
import Display from "../../components/userLoggedIn/product/Display";
import Filter from "../../components/userLoggedIn/product/Filter";

import pdtCSS from "./css/products.module.css";

export default function Products() {
  return (
    <div style={{ display: "flex", backgroundColor: "#F7F8FA" }}>
      <UserSideBar />
      <div className={pdtCSS.mainDiv}>
        <div className={pdtCSS.heading}>Products</div>
        <div className={pdtCSS.components}>
          <Filter />
          <Display />
        </div>
      </div>
    </div>
  );
}
