import React, { useState, useContext } from "react";

// state
import AuthContext from "../../../../store/auth-context";

// axios
import axios from "axios";

// css
import SCss from "./CSS/sellerDetail.module.css";
import KYCDetails from "./Seller Components/KYCDetails";
import DownloadBtn from "./Seller Components/DownloadBtn";
import MandatoryField from "./Seller Components/MandatoryField";

function SellerDetail(props) {
  const [load, setLoad] = useState(false);
  const [showVer, setVer] = useState(false);

  const authCtx = useContext(AuthContext);

  const saveVer = async () => {
    let showData = {
      email: props.show.val.Email,
      state: true,
    };
    try {
      const response = await axios.post(
        "/api/website/admin/setVerification",
        showData,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setLoad(false);

        setVer(false);

        console.log("first");

        authCtx.showAlert({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "Successfully Verified",
        });

        props.hide(false);
        props.setLoad(true);
      } else {
        setLoad(false);

        authCtx.showAlert({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An unexpected error occurred",
        });
      }
    } catch (error) {
      console.log(error);

      setLoad(false);

      authCtx.showAlert({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
      });
    }
  };
  return (
    <div className={SCss.main}>
      <div>
        <div className={SCss.svg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-left"
            onClick={() => {
              props.hide(false);
            }}
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <p className={SCss.seller}>Seller Details</p>
        </div>
        <div className={SCss.topText}>
          <p>KYC</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
          <p>Seller Info</p>
        </div>

        {/* KYC INFO */}
        <KYCDetails props={props} />
      </div>
      <div className={SCss.btn}>
        {/* Download Button */}
        <>
          <DownloadBtn props={props} />
          <MandatoryField props={props} />
        </>
      </div>
    </div>
  );
}

export default SellerDetail;
