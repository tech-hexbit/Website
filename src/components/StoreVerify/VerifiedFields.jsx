// import SvCss from "../Css/StoreVerify.module.css";

import SvCss from "../../Pages/Css/StoreVerify.module.css";
import { BadgeCheck } from "lucide-react";

const VerifiedFields = (props) => {
  return (
    <div className={SvCss.inpDiv}>
      <p className={SvCss.input_label}>{props.label}</p>
      <div className={SvCss.input_div_verified}>
        <input
          disabled={props.disable}
          type={props.type}
          name={props.name}
          value={props.showData[props.name]}
          id=""
          placeholder={props.placeholder}
          onChange={(e) => {
            props.setData({ ...props.showData, [props.name]: e.target.value });
          }}
        />
        {props.verifyPin ? <BadgeCheck className={SvCss.badge_icon} /> : ""}
      </div>
    </div>
  );
};
export default VerifiedFields;
