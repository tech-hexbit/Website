import React, { useEffect, useState, useContext } from "react";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// state
import AuthContext from "../../../store/auth-context";

// css
import PICss from "./Css/PersonalInfo.module.css";

export default function BankData({ loadBankDetails }) {
  const [formData, setFormData] = useState({
    AccountHolderName: "",
    AccountNumber: "",
    BankName: "",
    City: "",
    Branch: "",
    IfscCode: "",
  });

  const authCtx = useContext(AuthContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleVerify = async () => {
    try {
      const response = await axios.post(`api/website/auth/BankInfo`, formData, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        console.log("Bank info saved successfully");
        loadBankDetails();
      } else {
        console.log("Error saving bank info");
      }
    } catch (error) {
      console.error("Error saving bank info", error);
    }
  };

  return (
    <>
      {/*dailog box content*/}
      <div className={PICss.nestedFieldLargeDiv}>
        <div className={PICss.nestedFieldSmallDiv}>
          <div>Bank Details</div>
          <div className={PICss.inpDiv}>
            <div className={PICss.inputLabel}>A/c Holder Name.</div>
            <div className={PICss.inputDivVerified}>
              <input
                placeholder="Account Holder Name"
                type="text"
                name="AccountHolderName"
                value={formData.AccountHolderName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={PICss.inpDiv}>
            <div className={PICss.inputLabel}>IFSC CODE</div>
            <div className={PICss.inputDivVerified}>
              <input
                placeholder="11-character IFSC Code"
                type="text"
                name="IfscCode"
                value={formData.IfscCode}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={PICss.inpDiv}>
            <div className={PICss.inputLabel}>Account No.</div>
            <div className={PICss.inputDivVerified}>
              <input
                placeholder="Enter Account Number"
                type="number"
                name="AccountNumber"
                value={formData.AccountNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className={PICss.inpDiv}>
            <div className={PICss.inputLabel}>Bank Name</div>
            <div className={PICss.inputDivVerified}>
              <input
                placeholder="Name of Bank"
                type="text"
                name="BankName"
                value={formData.BankName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={PICss.inpDiv}>
            <div className={PICss.inputLabel}>Branch Name</div>
            <div className={PICss.inputDivVerified}>
              <input
                placeholder="Account Branch Name"
                type="text"
                name="Branch"
                value={formData.Branch}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={PICss.inpDiv}>
            <div className={PICss.inputLabel}>City</div>
            <div className={PICss.inputDivVerified}>
              <input
                placeholder="City"
                type="text"
                name="City"
                value={formData.City}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={PICss.inpDiv}>
            <p className={PICss.inputLabel}></p>
            <div className={PICss.inputDivFile}>
              <button className={PICss.verifyButton} onClick={handleVerify}>
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
