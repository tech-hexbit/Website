// import SvCss from "../Css/StoreVerify.module.css";

import SvCss from "../../Pages/Css/StoreVerify.module.css";
const Ondc_Details = (props) => {
  return (
    <div className={SvCss.nested_field_large_div}>
      <div>{props.text}</div>
      <div className={SvCss.nested_field_small_div}>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label1}</div>
          <select name="languages" id="lang">
            <option value="select">{props.placeholder_label1}</option>
            {props.label1_val1 ? (
              <option value={props.label1_val1}>{props.label1_val1}</option>
            ) : (
              ""
            )}
            {props.label1_val2 ? (
              <option value={props.label1_val2}>{props.label1_val2}</option>
            ) : (
              ""
            )}
          </select>
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label2}</div>
          <select name="languages" id="lang">
            <option value="select">{props.placeholder_label2}</option>
            {props.label2_val1 ? (
              <option value={props.label2_val1}>{props.label2_val1}</option>
            ) : (
              ""
            )}
            {props.label2_val2 ? (
              <option value={props.label2_val2}>{props.label2_val2}</option>
            ) : (
              ""
            )}
          </select>
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>{props.label3}</div>
          <select name="languages" id="lang">
            <option value="select">{props.placeholder_label3}</option>
            {props.label3_val1 ? (
              <option value={props.label3_val1}>{props.label3_val1}</option>
            ) : (
              ""
            )}
            {props.label3_val2 ? (
              <option value={props.label3_val2}>{props.label3_val2}</option>
            ) : (
              ""
            )}
          </select>
        </div>
        <div className={SvCss.inpDiv}>
          <p className={SvCss.input_label}>{props.label4}</p>
          <input
            type="number"
            name="Contact Details For Customer Care"
            value={props.showData.ContactDetailsForConsumerCare}
            id=""
            placeholder={props.placeholder_label4}
            onChange={(e) => {
              props.setData({
                ...props.showData,
                ContactDetailsForConsumerCare: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Ondc_Details;
