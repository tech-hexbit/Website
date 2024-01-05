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
        onChange={() => {
          props.setInput((prevInput) => ({
            ...prevInput,
            category: Array.isArray(prevInput.category)
              ? [...prevInput.category, props.val]
              : [props.val],
          }));
        }}
      />
      <label className={FCss.CheckBoxCatLabel} htmlFor={`${props.val.name}`}>
        {props.val.name}
      </label>
    </div>
  );
}
