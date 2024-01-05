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
        checked={props.input.category.includes(props.val)}
        className={FCss.inpCheckBoxCat}
        onChange={(event) => {
          const isChecked = event.target.checked;

          props.setInput((prevInput) => ({
            ...prevInput,
            category: isChecked
              ? Array.isArray(prevInput.category)
                ? [...prevInput.category, props.val]
                : [props.val]
              : prevInput.category.filter((category) => category !== props.val),
          }));
        }}
      />
      <label className={FCss.CheckBoxCatLabel} htmlFor={`${props.val.name}`}>
        {props.val.name}
      </label>
    </div>
  );
}
