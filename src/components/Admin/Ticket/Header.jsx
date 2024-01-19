import React from "react";

// css
import HCss from "./Css/Header.module.css";

export default function Header(props) {
  return (
    <>
      <b className={HCss.salesTicketsAll3}>{props.title}</b>
    </>
  );
}
