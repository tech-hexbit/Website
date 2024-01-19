import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";

// axios
import axios from "axios";

// components
import BankDel from "./BankDel";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// state
import AuthContext from "../../../store/auth-context";

// css
import pr from "./Css/PaymentRequest.module.css";

export default function PaymentRequest({ showSel, setSel }) {
  const [load, setLoad] = useState(true);
  const [bankDetails, setBankDetails] = useState([]);

  useEffect(() => {
    loadBankDetails();
  }, []);

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

  console.log(bankDetails[0]);
  return (
    <>
      <div className={pr.detailsLeft}>
        {load ? (
          <div className="loadCenterDiv" id="loadPadding">
            <Load />
          </div>
        ) : bankDetails.length > 0 ? (
          <>
            {bankDetails.map((bank, key) => (
              <BankDel
                BankName={bank.BankName}
                AccountNumber={String(bank.AccountNumber).slice(-4)}
                AccountHolderName={bank.AccountHolderName}
                IfscCode={bank.IfscCode}
                setSel={setSel}
                showSel={showSel}
                key={key}
                id={bank._id}
              />
            ))}
          </>
        ) : (
          <div className="loadCenterDiv" id="loadPadding">
            No Bank info available
          </div>
        )}
      </div>
    </>
  );
}

PaymentRequest.propTypes = {
  setSel: PropTypes.func.isRequired,
};
