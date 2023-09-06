import React from "react";

// css
import CCss from "./Css/Categories.module.css";

export default function CategoriesTabs(props) {
  return <div className={CCss.nameDiv}>{props.name}</div>;
}
