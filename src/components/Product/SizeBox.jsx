import React, { useState } from "react";


// css
import SBCss from "./Css/Size.module.css";

export default function SizeBox() {
  
  const [edit, setEdit] = useState(false);
  return (
    <div  className={SBCss.mDiv}>
      <p className={SBCss.subTitlePTag}>Size
      <span
            onClick={() => {
              setEdit(!edit);
            }}
            className={SBCss.editBtn}
            style={{ position: "relative", left: "94%"}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-pencil"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
          </span>
      
      </p>

      <div className={SBCss.sizesDiv}>
        <p className={SBCss.sizeBlock}>6 UK</p>
        <p className={SBCss.sizeBlock}>7 UK</p>
        <p className={SBCss.sizeBlock}>8 UK</p>
        <p className={SBCss.sizeBlock}>9 UK</p>
        <p className={SBCss.sizeBlock}>10 UK</p>
        <p className={SBCss.sizeBlock}>11 UK</p>
        <p className={SBCss.sizeBlock}>12 UK</p>

      </div>
    </div>
  );
}
