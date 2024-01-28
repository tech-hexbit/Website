import React from "react";

//css
import EFCss from "./Css/EditFeatures.module.css";

export default function EditFeatures(props) {
  return (
    <div className={EFCss.mDiv}>
      <p className={EFCss.editHead}>Edit</p>
      <p className={EFCss.subTitlePTag}>{props.label} :</p>
      <ul className={EFCss.listDiv}>
        <li className={EFCss.liBlock}>Sole: Rubber</li>
        <li className={EFCss.liBlock}>Closure: Lace-Up</li>
        <li className={EFCss.liBlock}>Fit Type: Regular</li>
        <li className={EFCss.liBlock}>Shoe Width: Medium</li>
        <li className={EFCss.liBlock}>Synthetic & Textile</li>
      </ul>
    </div>
  );
}
