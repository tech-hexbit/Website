// import SvCss from "../Css/StoreVerify.module.css";
import React from "react";
import PropTypes from "prop-types";
import SvCss from "../../Pages/Css/StoreVerify.module.css";

const BankFields = (props) => {
  return (
    <div className={SvCss.nested_field_large_div}>
      <div>Bank Details</div>
      <div className={SvCss.nested_field_small_div}>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>A/c Holder Name.</div>
          <input
            placeholder="Account Holder Name"
            type="text"
            onChange={(e) => {
              props.setData({
                ...props.showData,
                AcHolderName: e.target.value,
              });
            }}
          />
        </div>

        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>Account No.</div>
          <input
            placeholder="Enter Account Number"
            type="number"
            onChange={(e) => {
              props.setData({
                ...props.showData,
                AccountNo: e.target.value,
              });
            }}
          />
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>IFSC CODE</div>
          <input
            placeholder="11-character IFSC Code"
            type="text"
            onChange={(e) => {
              props.setData({
                ...props.showData,
                IfscCode: e.target.value,
              });
            }}
          />
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>Bank Name</div>
          <input
            placeholder="Name of Bank"
            type="text"
            onChange={(e) => {
              props.setData({
                ...props.showData,
                BankName: e.target.value,
              });
            }}
          />
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.input_label}>Branch Name</div>
          <input
            placeholder="Account Branch Name"
            type="text"
            onChange={(e) => {
              props.setData({
                ...props.showData,
                BranchName: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
BankFields.propTypes = {
  showData: PropTypes.object,
};
export default BankFields;
