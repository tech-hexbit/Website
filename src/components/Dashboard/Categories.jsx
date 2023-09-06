import React from "react";

// components
import CategoriesTabs from "./Categories/CategoriesTabs";

// css
import Ccss from "./Css/Categories.module.css";

export default function Categories() {
  return (
    <div className={Ccss.mDIvTabs}>
      <CategoriesTabs name="Ecommerce" />
      <CategoriesTabs name="Service providers" />
      <CategoriesTabs name="Education" />
      <CategoriesTabs name="Food" />
      <CategoriesTabs name="Automobile" />
    </div>
  );
}
