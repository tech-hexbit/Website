import React from "react";

// css
import SCss from "./Css/Sell.module.css";

export default function Title(props) {
  return (
    <div className={SCss.titlemDiv}>
      <p className={SCss.SellPTag}>
        <b>{props.title}</b>
      </p>
    </div>
  );
}
