import React from "react";
import { useContext } from "react";

//proptypes
import PropTypes from "prop-types";

import AuthContext from "./../../store/auth-context";

//axios
import axios from "axios";

//css
import SvCss from "./../../Pages/Css/StoreVerify.module.css";

//component
import BankVerify from "./BankVerify";

const BankFields = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <div className={SvCss.nestedFieldLargeDiv}>
      <div>Bank Details</div>
      <div className={SvCss.nestedFieldSmallDiv}>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.inputLabel}>A/c Holder Name.</div>
          <div className={SvCss.inputDivVerified}>
            <input
              disabled={props.disable.Bank}
              value={props.showData.AcHolderName}
              placeholder="Account Holder Name"
              type="text"
              onChange={(e) => {
                props.setData({
                  ...props.showData,
                  AcHolderName: e.target.value,
                });
              }}
            />
            {props.disable.Bank ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-badge-check"
                className={SvCss.badgeIcon}
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.inputLabel}>IFSC CODE</div>
          <div className={SvCss.inputDivVerified}>
            <input
              disabled={props.disable.Bank}
              placeholder="11-character IFSC Code"
              value={props.showData.IfscCode}
              type="text"
              onChange={(e) => {
                props.setData({
                  ...props.showData,
                  IfscCode: e.target.value,
                });
              }}
            />
            {props.disable.Bank ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-badge-check"
                className={SvCss.badgeIcon}
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={SvCss.inpDiv}>
          <div className={SvCss.inputLabel}>Account No.</div>
          <div className={SvCss.inputDivVerified}>
            <input
              disabled={props.disable.Bank}
              placeholder="Enter Account Number"
              type="number"
              onChange={(e) => {
                props.setData({
                  ...props.showData,
                  AccountNo: e.target.value,
                });
              }}
            />
            {props.disable.Bank ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-badge-check"
                className={SvCss.badgeIcon}
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className={SvCss.inpDiv}>
          <div className={SvCss.inputLabel}>Bank Name</div>
          <div className={SvCss.inputDivVerified}>
            <input
              disabled={props.disable.Bank}
              placeholder="Name of Bank"
              value={props.showData.BankName}
              type="text"
              onChange={(e) => {
                props.setData({
                  ...props.showData,
                  BankName: e.target.value,
                });
              }}
            />
            {props.disable.Bank ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-badge-check"
                className={SvCss.badgeIcon}
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ) : (
              ""
            )}
          </div>
        </div>
        {
          //Below is Branch Name field - with without verify button
        }
        <div className={SvCss.inpDiv}>
          <div className={SvCss.inputLabel}>Branch Name</div>
          <div className={SvCss.inputDivVerified}>
            <input
              disabled={props.disable.Bank}
              placeholder="Account Branch Name"
              value={props.showData.BranchName}
              type="text"
              onChange={(e) => {
                props.setData({
                  ...props.showData,
                  BranchName: e.target.value,
                });
              }}
            />
            {props.disable.Bank ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-badge-check"
                className={SvCss.badgeIcon}
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ) : (
              ""
            )}
          </div>
        </div>
        {
          //Below is Branch Name field - with verify button
        }
        {/* <div>
          {props.showData.BranchName.length >= 4 ? (
            <div className={SvCss.inpDiv}>
              <p className={SvCss.inputLabel}>Branch Name</p>
              <div className={SvCss.inputDivBank}>
                <input
                  disabled={props.disable.Bank}
                  type="text"
                  name="Branch Name"
                  value={props.showData.BranchName}
                  id=""
                  placeholder="Branch Name"
                  onChange={(e) => {
                    props.setData({
                      ...props.showData,
                      BranchName: e.target.value,
                    });
                  }}
                />
                <div>
                  <button
                    className={SvCss.verifyButton}
                    onClick={() => {
                      BankVerify(
                        authCtx,
                        props.setData,
                        props.showData,
                        props.disable,
                        props.setDisable,
                        props.setError
                      );
                    }}
                  >
                    {props.disable.Bank ? (
                      <svg
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
              <p className={SvCss.inputLabel}>Branch Name</p>
              <div className={SvCss.inputDivBank}>
                <input
                  disabled={props.disable.Bank}
                  type="text"
                  name="Branch Name"
                  value={props.showData.BranchName}
                  id=""
                  placeholder="Branch Name"
                  onChange={(e) => {
                    props.setData({
                      ...props.showData,
                      BranchName: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          )}
        </div> */}
        <div className={SvCss.inpDiv}>
          <p className={SvCss.inputLabel}></p>
          <div className={SvCss.inputDivFile}>
            <button
              className={SvCss.verifyButton}
              onClick={() => {
                BankVerify(
                  authCtx,
                  props.setData,
                  props.showData,
                  props.disable,
                  props.setDisable,
                  props.setError
                );
              }}
            >
              {props.disable.Bank ? (
                <svg
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
    </div>
  );
};
BankFields.propTypes = {
  props: PropTypes.shape({
    disable: PropTypes.shape({
      Pincode: PropTypes.bool,
      Pan: PropTypes.bool,
      Gstin: PropTypes.bool,
      Bank: PropTypes.bool,
    }),
    showData: PropTypes.object,
  }),
};
export default BankFields;
