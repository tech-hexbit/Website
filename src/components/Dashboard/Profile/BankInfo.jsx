import React, { useEffect, useState, useContext } from "react";

// components
import BankData from "./BankData";
import DeleteBankInfo from "./DeleteBankInfo";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const authCtx = useContext(AuthContext);

  const loadBankDetails = async () => {
    setLoad(true);
    try {
      const response = await axios.get(`/api/common/bank/BankInfo`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      console.log(response.data);

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
    } else {
      closeDialog();
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    loadBankDetails();
  }, []);

  return (
    <div className={PICss.personalinfotab}>
      <div className={PICss.headingDiv}>
        <div className={PICss.heading}>Bank info ({bankDetails.length})</div>
        <div className={PICss.headPlus} onClick={openDialog}>
          +
        </div>
      </div>

      {isDialogOpen ? (
        <BankData
          isDialogOpen={isDialogOpen}
          loadBankDetails={loadBankDetails}
          setIsDialogOpen={setIsDialogOpen}
        />
      ) : (
        <div className={PICss.box}>
          {load ? (
            <div className="loadCenterDiv" id="loadPadding">
              <Load />
            </div>
          ) : bankDetails.length > 0 ? (
            <div className={PICss.mapParentDiv}>
              {bankDetails.map((bank, key) => (
                <>
                  <div className={PICss.row11} id={PICss.mrow1} key={key}>
                    <div className={PICss.LiftDiv}>
                      <div>
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
                          class="lucide lucide-landmark"
                        >
                          <line x1="3" x2="21" y1="22" y2="22" />
                          <line x1="6" x2="6" y1="18" y2="11" />
                          <line x1="10" x2="10" y1="18" y2="11" />
                          <line x1="14" x2="14" y1="18" y2="11" />
                          <line x1="18" x2="18" y1="18" y2="11" />
                          <polygon points="12 2 20 7 4 7" />
                        </svg>
                      </div>
                      <div>
                        <p>
                          <b>
                            <span className={PICss.Particulars}>
                              {bank.BankDetails[0].BankName}
                            </span>{" "}
                            {String(bank.BankDetails[0].AccountNumber).slice(
                              -4
                            )}
                          </b>
                        </p>
                        <p>{bank.BankDetails[0].Branch}</p>
                      </div>
                    </div>
                    <div>
                      {/* delete Btn */}
                      <DeleteBankInfo
                        id={bank._id}
                        loadBankDetails={loadBankDetails}
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>
          ) : (
            <div className="loadCenterDiv" id="loadPadding">
              No Bank info available
            </div>
          )}
        </div>
      )}
    </div>
  );
}
