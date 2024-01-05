import React from "react";

export default function CatBox(props) {
  return (
    <div>
      <input
        type="checkbox"
        name={`${props.val.name}`}
        id={`${props.val.name}`}
      />
      <label htmlFor={`${props.val.name}`}>{props.val.name}</label>
    </div>
  );
}
