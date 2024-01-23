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
        <div>
          {props.showData.BankName.length >= 4 ? (
            <div className={SvCss.inpDiv}>
              <p className={SvCss.input_label}>Bank Name</p>
              <div className={SvCss.input_div_pincode}>
                <input
                  disabled={props.disable}
                  type="text"
                  name="Bank Name"
                  value={props.showData.BankName}
                  id=""
                  placeholder="Name of Bank"
                  onChange={(e) => {
                    props.setData({
                      ...props.showData,
                      BankName: e.target.value,
                    });
                  }}
                />
                <div className={SvCss.verify_button_div}>
                  <button
                    className={SvCss.verify_button}
                    onClick={() => {
                      console.log("clicked!");
                      // pincodeVerify({
                      //   setData,
                      //   showData,
                      //   setDisable,
                      //   setVerify,
                      //   setError,
                      // });
                    }}
                  >
                    {props.verifyPin ? (
                      <svg
                        // className={SvCss.badge_icon}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-badge-check"
                      >
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    ) : (
                      "Verify"
                    )}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className={SvCss.inpDiv}>
              <p className={SvCss.input_label}>Bank Name</p>
              <div className={SvCss.input_div_pincode}>
                <input
                  disabled={props.disable}
                  type="text"
                  name="Bank Name"
                  value={props.showData.BankName}
                  id=""
                  placeholder="Bank Name"
                  onChange={(e) => {
                    props.setData({
                      ...props.showData,
                      BankName: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          )}
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
