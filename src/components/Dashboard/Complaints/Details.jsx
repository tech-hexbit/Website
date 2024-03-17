import React, { useState, useEffect } from "react";

// css
import DelCss from "./Css/Details.module.css";

export default function Details({ selectedItem, closeOverlay, setLoad, load }) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/website/Issue/get/list/full", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setLoad(false);

        console.log(response.data.issueList);

        setData(response.data.issueList);
      } else {
        setLoad(false);

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An unexpected error occurred",
          val: true,
        });
      }
    } catch (error) {
      console.log(error);

      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });
    }
  };

  useEffect(() => {
    if (selectedItem.length === 0) {
      return;
    }

    loadData();
  }, [, selectedItem]);

  return <div>Details</div>;
}
