import React, { useContext, useEffect, useState } from "react";

// components
import PersonalInfo from "./PersonalInfo";
import BusinessInfo from "./BusinessInfo";
import EditProfileImage from "./EditProfileImage";

// axios
import axios from "axios";

// Css
import "./Css/Common.css";
import HPCss from "./Css/Header.module.css";

// state
import AuthContext from "./../../../store/auth-context";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";
import { Alert } from "./../../../MicroInteraction/Alert";

export default function Header() {
  const [load, setLoad] = useState(false);
  const [userData, setUserData] = useState({});
  const [showEdit, setEdit] = useState(false);
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

  // console.log(authCtx.user.access);

  return (
    <>
      <div className={HPCss.background}>
        <div className={HPCss.mDiv}>
          <div className={HPCss.ImgmDiv}>
            <img src={authCtx.user.image} alt="" className={HPCss.imgHeaderP} />

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
              {authCtx.user.access === 0 ? (
                <>
                  <span>.</span>
                  <span>Admin</span>
                </>
              ) : (
                ""
              )}
            </p>
            <p className={HPCss.delDes}>{authCtx.user.GSTIN}</p>
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
            <PersonalInfo
              Email={userData.Email}
              phone={userData.Phone}
              Address={userData.Address}
            />
            <BusinessInfo
              ShopName={userData.ShopName}
              GSTIN={userData.ImporterLicense}
              AdditionalInfo={userData.AdditionalInfo}
            />
          </>
        )}
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
