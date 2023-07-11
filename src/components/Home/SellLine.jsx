import React from "react";

// css
import SLCss from "./Css/Sell.module.css";

// icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function SellLine(props) {
  return (
    <>
      <div className={SLCss.SlmDiv}>
        <div className={SLCss.iconDiv}>
          <ArrowForwardIosIcon fontSize="small" />
        </div>
        <p className={SLCss.linePTag}>{props.line}</p>
      </div>
    </>
  );
}
