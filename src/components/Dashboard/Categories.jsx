import React from "react";

// components
import CategoriesTabs from "./Categories/CategoriesTabs";

export default function Categories() {
  return (
    <div>
      <CategoriesTabs name="Ecommerce" />
      <CategoriesTabs name="Service providers" />
      <CategoriesTabs name="Education" />
      <CategoriesTabs name="Food" />
      <CategoriesTabs name="Automobile" />
    </div>
  );
}
