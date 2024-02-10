import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";
import { Alert } from "./../../../MicroInteraction/Alert";

// state
import AuthContext from "../../../store/auth-context";

// css
import PICss from "./Css/PersonalInfo.module.css";

export default function BankData({
  loadBankDetails,
  isDialogOpen,
  setIsDialogOpen,
}) {
  const [ver, setVer] = useState(false);
  const [load, setLoad] = useState(false);
  const [formData, setFormData] = useState({
    AccountHolderName: "",
    AccountNumber: "",
    BankName: "",
    City: "",
    Branch: "",
    IfscCode: "",
  });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
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
    setLoad(true);

    try {
      let data = {
        bankAccount: formData.AccountNumber,
        ifsc: formData.IfscCode,
      };

      const response = await axios.post("/api/common/verification/bank", data, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setFormData({
          ...formData,
          AccountHolderName: response.data.response.data.nameAtBank,
          BankName: response.data.response.data.bankName,
          Branch: response.data.response.data.branch,
          City: response.data.response.data.city,
        });

        setVer(true);

        setLoad(false);
      } else {
        setLoad(false);

        setError({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Invalid Bank Info",
          val: true,
        });
      }
    } catch (error) {
      console.error("Error saving bank info", error);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });

      setLoad(false);
    }
  };

  const saveData = async () => {
    setLoad(true);

    try {
      let data = {
        AccountHolderName: formData.AccountHolderName,
        AccountNumber: formData.AccountNumber,
        BankName: formData.BankName,
        City: formData.City,
        Branch: formData.Branch,
        IfscCode: formData.IfscCode,
      };

      console.log(data);

      const response = await axios.post("/api/website/auth/BankInfo", data, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setLoad(false);

        setError({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "Successfully Added",
          val: true,
        });

        setIsDialogOpen(!isDialogOpen);

        loadBankDetails();
      } else {
        setLoad(false);

        setError({
          mainColor: "#FFF4E5",
          secondaryColor: "#FFA117",
          symbol: "warning",
          title: "Warning",
          text: "Invalid Bank Info",
          val: true,
        });
      }
    } catch (error) {
      console.error(error);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });

      setLoad(false);
    }
  };

  return (
    <>
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
              {ver ? (
                <button className={PICss.verifyButton} onClick={saveData}>
                  {load ? <Load /> : "Save Info"}
                </button>
              ) : (
                <>
                  <button className={PICss.verifyButton} onClick={handleVerify}>
                    {load ? <Load /> : "Verify"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}

BankData.propTypes = {
  loadBankDetails: PropTypes.func.isRequired,
  isDialogOpen: PropTypes.bool.isRequired,
  setIsDialogOpen: PropTypes.func.isRequired,
};
