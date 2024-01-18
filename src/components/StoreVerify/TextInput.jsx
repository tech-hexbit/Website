// import SvCss from "../Css/StoreVerify.module.css";
import React from "react";
import SvCss from "../../Pages/Css/StoreVerify.module.css";

const TextInput = ({ showData, setData, Label, type, field, placeholder }) => {
  return (
    <div className={SvCss.inpDiv}>
      <p className={SvCss.input_label}>{Label}</p>
      <input
        type={type}
        name="days"
        value={showData[field]}
        id=""
        placeholder={placeholder}
        onChange={(e) => {
          setData({ ...showData, [field]: e.target.value });
        }}
      />
    </div>
  );
};
export default TextInput;
