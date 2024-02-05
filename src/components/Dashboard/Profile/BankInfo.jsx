import React, { useEffect, useState, useContext } from "react";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// state
import AuthContext from "../../../store/auth-context";

// css
import PICss from "./Css/PersonalInfo.module.css";

export default function BankInfo() {
  const [load, setLoad] = useState(true);
  const [bankDetails, setBankDetails] = useState([]);

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

  useEffect(() => {
    loadBankDetails();
  }, []);

  return (
    <div className={PICss.personalinfotab}>
      <div className={PICss.headingDiv}>
        <div className={PICss.heading}>Bank info ({bankDetails.length})</div>
        <div className={PICss.headPlus}>+</div>
      </div>

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

                  {/* City */}
                  <div className={PICss.col1}>
                    <div className={PICss.inputheading}>City</div>
                    <div className={PICss.infodiv}>
                      {bank.BankDetails[0].City}
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
    </div>
  );
}
