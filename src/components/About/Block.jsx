import React, { useState } from "react";

// Css
import BCss from "./Css/Block.module.css";

// icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function Block(props) {
  const [show, set] = useState(props.side);
  return (
    <div className={BCss.mDiv}>
      {props.side === "right" ? (
        <>
          <div className={BCss.iconDiv}>
            <ArrowForwardIosIcon fontSize="small" />
          </div>
        </>
      ) : (
        ""
      )}
      <p id={props.side ? "right" : ""}>{props.txt}</p>
      {props.side === "left" ? (
        <>
          <div className={BCss.iconDiv}>
            <ArrowBackIosNewIcon fontSize="small" />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
