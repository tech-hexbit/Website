import React, { useContext } from "react";

import PropTypes from "prop-types";

import AuthContext from "../../store/auth-context";

//axios
import axios from "axios";

//css
import OfCss from "./Css/OndcField.module.css";
import BfCss from "./Css/BankFields.module.css";
import FiCss from "./Css/FileInput.module.css";

const BankFields = ({ disable, setDisable, showData, setData, setError }) => {
  const bankVerify = async (
    authCtx,
    setData,
    showData,
    disable,
    setDisable,
    setError
  ) => {
    //   const authCtx = useContext(AuthContext);
    try {
      const validBank = (response) => {
        setData({
          ...showData,
          AcHolderName: response.data.nameAtBank,
          BankName: response.data.bankName,
          BranchName: response.data.branch,
        });
        setDisable({ ...disable, Bank: true });
      };
      const invalidBank = () => {
        setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "pets",
          title: "Check it out",
          text: "Invalid Bank Details",
          val: true,
        });
      };
      const bankDetails = {
        // phone: authCtx.user.Phone,
        name: showData.AcHolderName,
        bankAccount: showData.AccountNo,
        ifsc: showData.IfscCode,
      };
      if (
        !(
          bankDetails.name &&
          bankDetails.bankAccount &&
          bankDetails.ifsc &&
          showData.BankName &&
          showData.BranchName
        )
      ) {
        setError({
          mainColor: "#FFC0CB",
          secondaryColor: "#FF69B4",
          symbol: "error",
          title: "Check it out",
          text: "Please Fill All The Details",
          val: true,
        });
      } else {
        const response = await axios.post(
          "/api/verification/bank",
          bankDetails
        );
        response.data.success
          ? validBank(response.data.response)
          : invalidBank();
      }
    } catch (e) {
      console.log(e);
      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });
    }
  };
  const authCtx = useContext(AuthContext);
  return (
    <div className={OfCss.nestedFieldLargeDiv}>
      <div>Bank Details</div>
      <div className={OfCss.nestedFieldSmallDiv}>
        <div className={OfCss.inpDiv}>
          <div className={OfCss.inputLabel}>A/c Holder Name.</div>
          <div className={BfCss.inputDivVerified}>
            <input
              disabled={disable.Bank}
              value={showData.AcHolderName}
              placeholder="Account Holder Name"
              type="text"
              onChange={(e) => {
                setData({
                  ...showData,
                  AcHolderName: e.target.value,
                });
              }}
            />
            {disable.Bank ? (
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
                className={BfCss.badgeIcon}
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={OfCss.inpDiv}>
          <div className={OfCss.inputLabel}>IFSC CODE</div>
          <div className={BfCss.inputDivVerified}>
            <input
              disabled={disable.Bank}
              placeholder="11-character IFSC Code"
              value={showData.IfscCode}
              type="text"
              onChange={(e) => {
                setData({
                  ...showData,
                  IfscCode: e.target.value,
                });
              }}
            />
            {disable.Bank ? (
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
                className={BfCss.badgeIcon}
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={OfCss.inpDiv}>
          <div className={OfCss.inputLabel}>Account No.</div>
          <div className={BfCss.inputDivVerified}>
            <input
              disabled={disable.Bank}
              placeholder="Enter Account Number"
              type="number"
              onChange={(e) => {
                setData({
                  ...showData,
                  AccountNo: e.target.value,
                });
              }}
            />
            {disable.Bank ? (
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
                className={BfCss.badgeIcon}
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className={OfCss.inpDiv}>
          <div className={OfCss.inputLabel}>Bank Name</div>
          <div className={BfCss.inputDivVerified}>
            <input
              disabled={disable.Bank}
              placeholder="Name of Bank"
              value={showData.BankName}
              type="text"
              onChange={(e) => {
                setData({
                  ...showData,
                  BankName: e.target.value,
                });
              }}
            />
            {disable.Bank ? (
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
                className={BfCss.badgeIcon}
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={OfCss.inpDiv}>
          <div className={OfCss.inputLabel}>Branch Name</div>
          <div className={BfCss.inputDivVerified}>
            <input
              disabled={disable.Bank}
              placeholder="Account Branch Name"
              value={showData.BranchName}
              type="text"
              onChange={(e) => {
                setData({
                  ...showData,
                  BranchName: e.target.value,
                });
              }}
            />
            {disable.Bank ? (
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
                className={BfCss.badgeIcon}
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={OfCss.inpDiv}>
          <p className={OfCss.inputLabel}></p>
          <div className={FiCss.inputDivFile}>
            <button
              className={BfCss.verifyButton}
              onClick={() => {
                bankVerify(
                  authCtx,
                  setData,
                  showData,
                  disable,
                  setDisable,
                  setError
                );
              }}
            >
              {disable.Bank ? (
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
  disable: PropTypes.object,
  showData: PropTypes.object,
};
export default BankFields;
