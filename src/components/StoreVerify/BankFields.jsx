// import SvCss from "../Css/StoreVerify.module.css";

import SvCss from "../../Pages/Css/StoreVerify.module.css";
import PropTypes from "prop-types";

const BankFields = (props) => {
  return (
    <div className={SvCss.nested_field_large_div}>
      <div>{props.text}</div>
      <div className={SvCss.nested_field_small_div}>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label1}</div>
          <input placeholder={props.placeholder1} type={props.type1} />
        </div>

        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label2}</div>
          <input placeholder={props.placeholder2} type={props.type2} />
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label3}</div>
          <input placeholder={props.placeholder3} type={props.type3} />
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label4}</div>
          <input placeholder={props.placeholder4} type={props.type4} />
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label5}</div>
          <input placeholder={props.placeholder5} type={props.type5} />
        </div>
      </div>
    </div>
  );
};
BankFields.propTypes = {
  label1: PropTypes.string,
  placeholder1: PropTypes.string,
  type1: PropTypes.string,
  label2: PropTypes.string,
  placeholder2: PropTypes.string,
  type2: PropTypes.string,
  label3: PropTypes.string,
  placeholder3: PropTypes.string,
  type3: PropTypes.string,
  label4: PropTypes.string,
  placeholder4: PropTypes.string,
  type4: PropTypes.string,
  label5: PropTypes.string,
  placeholder5: PropTypes.string,
  type5: PropTypes.string,
};
export default BankFields;
