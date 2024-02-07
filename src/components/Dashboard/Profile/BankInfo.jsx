import React, { useEffect, useState, useContext } from "react";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";
import { Alert } from "./../../../MicroInteraction/Alert";

// state
import AuthContext from "../../../store/auth-context";

// css
import PICss from "./Css/PersonalInfo.module.css";

export default function BankInfo() {
  const [load, setLoad] = useState(true);
  const [bankDetails, setBankDetails] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isBoxVisible, setIsBoxVisible] = useState(true);
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

  const loadBankDetails = async () => {
    setLoad(true);
    try {
      const response = await axios.get(`/api/common/bank/BankInfo`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setBankDetails(response.data.bankDetail);

        setLoad(false);
      } else {
        console.log("Error fetching bank details");
        setLoad(false);
      }
    } catch (e) {
      setLoad(false);
      console.log("Error fetching bank details", e);
    }
  };

  const openDialog = () => {
    if (!isDialogOpen) {
      setIsDialogOpen(true);
      setIsBoxVisible(false);
    } else {
      closeDialog();
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setIsBoxVisible(true);
  };

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

        setLoad(false);

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

  useEffect(() => {
    loadBankDetails();
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      <div className={PICss.personalinfotab}>
        <div className={PICss.headingDiv}>
          <div className={PICss.heading}>Bank info ({bankDetails.length})</div>
          <div className={PICss.headPlus} onClick={openDialog}>
            +
          </div>
        </div>

        {isDialogOpen && (
          <div>
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
                    <button
                      className={PICss.verifyButton}
                      onClick={handleVerify}
                    >
                      {load ? <Load /> : "Verify"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isBoxVisible && (
          <div className={PICss.box}>
            {load ? (
              <div className="loadCenterDiv" id="loadPadding">
                <Load />
              </div>
            ) : bankDetails.length > 0 ? (
              <>
                {bankDetails.map((bank, key) => (
                  <>
                    <div className={PICss.row1} id={PICss.mrow1} key={key}>
                      {/* Account Number */}
                      <div className={PICss.col1}>
                        <div className={PICss.inputheading}>Account Number</div>
                        <div className={PICss.infodiv}>
                          {bank.BankDetails[0].AccountNumber}
                        </div>
                      </div>

                      {/* IFSC Code */}
                      <div className={PICss.col1}>
                        <div className={PICss.inputheading}>IFSC Code</div>
                        <div className={PICss.infodiv}>
                          {bank.BankDetails[0].IfscCode}
                        </div>
                      </div>
                    </div>

                    <div className={PICss.row1} id={PICss.mrow1}>
                      {/* Account Holder Name */}
                      <div className={PICss.col1}>
                        <div className={PICss.inputheading}>
                          Account Holder Name
                        </div>
                        <div className={PICss.infodiv}>
                          {bank.BankDetails[0].AccountHolderName}
                        </div>
                      </div>

                      {/* Bank Name */}
                      <div className={PICss.col1}>
                        <div className={PICss.inputheading}>Bank Name</div>
                        <div className={PICss.infodiv}>
                          {bank.BankDetails[0].BankName}
                        </div>
                      </div>
                    </div>

                    <div className={PICss.row1} id={PICss.mrow1} key={key}>
                      {/* Branch Name */}
                      <div className={PICss.col1}>
                        <div className={PICss.inputheading}>Branch Name</div>
                        <div className={PICss.infodiv}>
                          {bank.BankDetails[0].Branch}
                        </div>
                      </div>
                    </div>

                    {key !== bankDetails.length - 1 && (
                      <div className={PICss.Line1}></div>
                    )}
                  </>
                ))}
              </>
            ) : (
              <div className="loadCenterDiv" id="loadPadding">
                No Bank info available
              </div>
            )}
          </div>
        )}
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
