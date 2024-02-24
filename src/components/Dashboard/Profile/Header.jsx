import React, { useContext, useEffect, useState } from "react";

// components
import BankInfo from "./BankInfo";
import StoreInfo from "./StoreInfo";
import PersonalInfo from "./PersonalInfo";
import BusinessInfo from "./BusinessInfo";
import EditProfileImage from "./EditProfileImage";

// axios
import axios from "axios";

// state
import AuthContext from "./../../../store/auth-context";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";
import { Alert } from "./../../../MicroInteraction/Alert";

// Css
import "./Css/Common.css";
import HPCss from "./Css/Header.module.css";

export default function Header() {
  const [load, setLoad] = useState(false);
  const [showEdit, setEdit] = useState(false);
  const [userData, setUserData] = useState();
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`/api/website/auth/me/`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        console.log(response.data.user);

        setUserData(response.data.user);

        setLoad(false);
      } else {
        setLoad(false);

        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className={HPCss.background}>
        <div className={HPCss.mDiv}>
          <div className={HPCss.contentDivHead}>
            <div className={HPCss.ImgmDiv}>
              <img
                src={authCtx.user.image}
                alt=""
                className={HPCss.imgHeaderP}
              />

              {load ? (
                ""
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-pencil"
                  className={HPCss.editIcon}
                  onClick={() => {
                    setEdit(!showEdit);
                  }}
                >
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  <path d="m15 5 4 4" />
                </svg>
              )}
            </div>
            <div className={HPCss.delHeader}>
              <p className={HPCss.delPName}>
                <b>{authCtx.user.BusinessName}</b>
              </p>
              <p className={HPCss.delDes}>{authCtx.user.GSTIN}</p>
            </div>
          </div>
          <div className={HPCss.LinkDiv}>
            <a
              href="https://youtu.be/ZRwQDJPVwqI?si=qhwgMVUzL63W6N30"
              target="_blank"
              className={HPCss.aTag}
            >
              <img
                src="https://merchant.cashfree.com/merchants/44383a761979b571cb9b.svg"
                alt="ytIcon"
              />
              <p className={HPCss.LinkLabel}>Working</p>
            </a>
          </div>
        </div>

        {load ? (
          ""
        ) : (
          <div className={showEdit ? "showEdit" : "hideEdit"}>
            <EditProfileImage setEdit={setEdit} setError={setError} />
          </div>
        )}

        {load ? (
          <div className="loadCenterDiv">
            <Load />
          </div>
        ) : (
          <>
            {userData && (
              <>
                <PersonalInfo
                  Email={authCtx.user.Email}
                  phone={userData.Phone}
                  Address={userData.Address}
                />

                {authCtx.user.access === 1 && (
                  <>
                    <BusinessInfo
                      ShopName={userData.ShopName}
                      GSTIN={userData.ImporterLicense}
                      AdditionalInfo={userData.AdditionalInfo}
                    />
                    <StoreInfo
                      supportEmail={userData.Store[0].StoreID.support.email}
                      supportNumber={userData.Store[0].StoreID.support.phone}
                      cancelAmt={
                        userData.Store[0].StoreID.Cancellation.amountValue
                      }
                      cancelPer={
                        userData.Store[0].StoreID.Cancellation.percentage
                      }
                      workingDays={userData.Store[0].StoreID.locations.days}
                      h1={userData.Store[0].StoreID.locations.times[0]}
                      h2={userData.Store[0].StoreID.locations.times[1]}
                    />
                  </>
                )}
              </>
            )}

            <BankInfo />
          </>
        )}
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
