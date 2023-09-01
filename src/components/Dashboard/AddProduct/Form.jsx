import React from "react";

// css
import FCss from "./Css/Form.module.css";

export default function Form() {
  return (
    <div className={FCss.mDiv}>
      <div className={FCss.left}>
        <div className={FCss.inpDiv}>
          <p className={FCss.label}>Product title</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter product title"
            className={FCss.inp}
          />
        </div>

        <div className={FCss.inpDiv}>
          <p className={FCss.label}>Product Description</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Write product description here..."
            className={FCss.inpTA}
          ></textarea>
        </div>
      </div>
      <div className={FCss.right}></div>
    </div>
  );
}
