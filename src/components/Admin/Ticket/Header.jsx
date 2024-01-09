import React from "react";

// css
import HCss from "./Css/Header.modue.css";

export default function Header(props) {
  return (
    <>
      <b className={HCss.salesTicketsAll3}>{props.title}</b>
    </>
  );
}