import React, { useEffect, useState, useContext } from "react";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// state
import AuthContext from "../../../store/auth-context";

// css
import pr from "./Css/PaymentRequest.module.css";

export default function PaymentRequest() {
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

  return (
    <div className={pr.main}>
      <h3>Confirm Account Details For Payment Request </h3>
      <div className={pr.detailWrapper}>
        <div className={pr.detailsLeft}>
          {load ? (
            <div className="loadCenterDiv">
              <Load />
            </div>
          ) : bankDetails.length > 0 ? (
            <>
              {bankDetails.map((bank, key) => (
                <div key={key} className={pr.grid}>
                  <div className={pr.gridItem}>
                    <input type="checkbox" className={pr.checkBoxBank} />

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
                      className="lucide lucide-wallet-2"
                    >
                      <path d="M17 14h.01" />
                      <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
                    </svg>
                  </div>

                  {/* BANK NAME */}
                  <div className={pr.gridItem}>
                    <h4>BANK</h4>
                    <h3>{bank.BankName}</h3>
                  </div>

                  {/* ACCOUNT NUMBER */}
                  <div className={pr.gridItem}>
                    <h4>LAST 4 Digit</h4>
                    <h3>{String(bank.AccountNumber).slice(-4)}</h3>
                  </div>

                  {/* HOLDER'S NAME */}
                  <div className={pr.gridItem}>
                    <h4>Account Holder</h4>
                    <h3>{bank.AccountHolderName}</h3>
                  </div>

                  {/* IFSC CODE */}
                  <div className={pr.gridItem}>
                    <h4>IFSC CODE</h4>
                    <h3>{bank.IfscCode}</h3>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="loadCenterDiv">No Bank info available</div>
          )}
        </div>

        <div className={pr.detailsRight}>
          <p>
            <span>
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
                class="lucide lucide-book-text"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                <path d="M8 7h6" />
                <path d="M8 11h8" />
              </svg>
            </span>
            <span>Alışveriş Özeti</span>
          </p>
          <div className={pr.flex}>
            <div className={pr.flexItem}>
              <h4>Total Selected</h4>
              <h1>1</h1>
            </div>
            <div className={pr.flexItem}>
              <h4>Total Amount</h4>
              <h1 className={pr.ruppee}>
                <span>
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
                    class="lucide lucide-indian-rupee"
                  >
                    <path d="M6 3h12" />
                    <path d="M6 8h12" />
                    <path d="m6 13 8.5 8" />
                    <path d="M6 13h3" />
                    <path d="M9 13c6.667 0 6.667-10 0-10" />
                  </svg>
                </span>
                317.46
              </h1>
            </div>
          </div>
          <div className={pr.flexItem}>
            <button>Raise Payment Request</button>
          </div>
        </div>
      </div>
    </div>
  );
}
