import React from "react";

// css
import FCss from "./Css/Form.module.css";

export default function CatBox(props) {
  return (
    <div className={FCss.catMDiv}>
      <input
        type="checkbox"
        name={`${props.val.name}`}
        id={`${props.val.name}`}
        className={FCss.inpCheckBoxCat}
      />
      <label className={FCss.CheckBoxCatLabel} htmlFor={`${props.val.name}`}>
        {props.val.name}
      </label>
    </div>
  );
}
