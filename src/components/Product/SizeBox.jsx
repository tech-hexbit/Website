import React from "react";

// css
import SBCss from "./Css/Size.module.css";

export default function SizeBox() {
  return (
    <div className={SBCss.mDiv}>
      <p className={SBCss.subTitlePTag}>Size</p>

      <div className={SBCss.sizesDiv}>
        <p className={SBCss.sizeBlock}>6 UK</p>
        <p className={SBCss.sizeBlock}>7 UK</p>
        <p className={SBCss.sizeBlock}>8 UK</p>
        <p className={SBCss.sizeBlock}>9 UK</p>
      </div>
    </div>
  );
}
