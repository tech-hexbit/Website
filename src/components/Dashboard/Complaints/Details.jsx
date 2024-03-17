import React, { useState, useEffect } from "react";

// css
import DelCss from "./Css/Details.module.css";

export default function Details({ selectedItem, closeOverlay, setLoad, load }) {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (selectedItem.length === 0) {
      return;
    }

    loadData();
  }, [, selectedItem]);

  return <div>Details</div>;
}
