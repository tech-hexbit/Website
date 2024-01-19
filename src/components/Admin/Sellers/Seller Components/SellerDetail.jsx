import React, { useState, useContext } from "react";

// components
import Load from "./../../../../MicroInteraction/Load";
import { Alert } from "./../../../../MicroInteraction/Alert";

// state
import AuthContext from "../../../../store/auth-context";

// axios
import axios from "axios";

// css
import SCss from './CSS/SellerDetail.module.css'
import SDCss from "../CSS/SellersDetails.module.css";


function SellerDetail( props) {
    const [load, setLoad] = useState(false);
  const [showVer, setVer] = useState(false);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

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

        setError({
          mainColor: "#EDFEEE",
          secondaryColor: "#5CB660",
          symbol: "check_circle",
          title: "Success",
          text: "Successfully Verified",
          val: true,
        });

        props.hide(false);
        props.setLoad(true);
      } else {
        setLoad(false);

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An unexpected error occurred",
          val: true,
        });
      }
    } catch (error) {
      console.log(error);

      setLoad(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });
    }
  };
  return (
    <div className={SCss.main}>
        <div>
        <div className={SCss.svg}>
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"
             onClick={() => {
                props.hide(false);
              }}
            >
            <path d="m15 18-6-6 6-6"/></svg>
        </div>
            <div className={SCss.topText}>
                <p>
                KYC
                </p>
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </p>
                <p>
                    Seller Info
                </p>
            </div>
            <p className={SCss.seller}>Seller Details</p>
             <div className={SCss.alert} >
              {props.show.val.accountVerified ? (
                <>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#15e506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
                <p className={SCss.ver}>VERIFIED SELLER</p>
                </>

              ) : (
                <>
                  {showVer ? (
                    <>
                      <div class="checkbox-wrapper-3">
                        <input type="checkbox" id="cbx-3" onClick={saveVer} />
                        <label for="cbx-3" class="toggle">
                          <span></span>
                        </label>
                      </div>
                    </>
                  ) : (
                    
                    <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d70303"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-badge-help"
                      className={SDCss.notVer}
                      onClick={() => {
                        setVer(true);
                      }}
                    >
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" x2="12.01" y1="17" y2="17" />
                    </svg>
                    <p className={SCss.unVer}>UNVERIFIED SELLER</p>
                    </>
                  )}
                </>
              )}
            </div>
            {/* KYC INFO */}
            <div className={SCss.KYCmain}>
                <p className={SCss.KYCtop}>KYC INFO</p>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>NAME:</p>
                    <p>Shoes</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>BUSINESS NAME:</p>
                    <p>{props.show.val.BusinessName}</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>PHONE NUMBER:</p>
                    <p>+91 {props.show.val.Phone}</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>EMAIL ID:</p>
                    <p>{props.show.val.Email}</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>ADDRESS:</p>
                    <p>{props.show.val.Address}</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>STATE:</p>
                    <p>{props.show.val.State}</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>CITY:</p>
                    <p>{props.show.val.City}</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>PINCODE:</p>
                    <p>{props.show.val.Pincode}</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>GEO-LOCATION:</p>
                    <p>Adidas India Marketing Private Ltd</p>
                </div>

                <div className={SCss.KYCSec}>
                    <p className={SCss.empty}></p>
                </div>
                {/* Bank Details */}
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>BANK DETAILS:</p>
                    <p></p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>A/c Holder Name:</p>
                    <p>Adidas India Marketing Private Ltd</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>IFSC CODE:</p>
                    <p>Adidas India Marketing Private Ltd</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>BRANCH NAME:</p>
                    <p>Adidas India Marketing Private Ltd</p>
                </div>
                {/* GSTIN */}
                <div className={SCss.empty2}>
                    {/* <p className={SCss.empty}></p> */}
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>GSTIN:</p>
                    <p>{props.show.val.GSTIN}</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>ID PROOF (PAN)</p>
                    <p>33.5 x 21 x 13.5 cm</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>FSSAI LICENCE NO:</p>
                    <p>{props.show.val.ImporterLicense}</p>
                </div>
                {/* ONDC DETAILS */}
                <div className={SCss.empty2}>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>ONDC DETAILS:</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>TIME TO SHIP:</p>
                    <p>Adidas India Marketing Private Ltd</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>CANCELLABLE :</p>
                    <p>Adidas India Marketing Private Ltd</p>
                </div><div className={SCss.KYCSec}>
                    <p className={SCss.secText}>RETURNABLE :</p>
                    <p>Adidas India Marketing Private Ltd</p>
                </div><div className={SCss.KYCSec}>
                    <p className={SCss.secText}>Contact Details For Consumer Care :</p>
                    <p>Adidas India Marketing Private Ltd</p>
                </div><div className={SCss.KYCSec}>
                    <p className={SCss.secText}>Category ID :</p>
                    <p>Adidas India Marketing Private Ltd</p>
                </div><div className={SCss.KYCSec}>
                    <p className={SCss.secText}>LOCATION AVAILABILITY :</p>
                    <p>950 gm</p>
                </div><div className={SCss.KYCSec}>
                    <p className={SCss.secText}>STORE TIMING :</p>
                    <p>950 gm</p>
                </div>
            </div>
        </div>
        <div className={SCss.btn}>
        {/* Download Button */}
            <>
                <div className={SCss.downloadBtn}>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg></p>
                    <p className={SCss.btnText}>Download Cheque</p>
                </div>
                <div className={SCss.downloadBtn}>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg></p>
                    <p className={SCss.btnText}>Download GST Certificate</p>
                </div>
                <div className={SCss.downloadBtn}>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg></p>
                    <p className={SCss.btnText}>Download PAN Certificate</p>
                </div>
                <div className={SCss.downloadBtn}>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg></p>
                    <p className={SCss.btnText}> Download Seller Data</p>
                </div>
                <div className={SCss.mandatoryFields}>
                        <u>
                            <div className={SCss.mandatoryT}>
                            <p className={SCss.asterisk}>**</p>
                            <p>
                            All Check Box Verification are Mandatory
                            </p>
                            <p className={SCss.asterisk}>**</p>
                            </div>
                        </u>
                        <div>
                            <label className={SCss.checkbox}>
                            <input type="checkbox" name="checkbox" />
                            <p>BANK DETAILS VERIFIED </p>
                            </label>
                            <label className={SCss.checkbox}>
                            <input type="checkbox" name="checkbox" />
                            <p>GST & PAN VERIFIED</p>
                            </label>
                            <label className={SCss.checkbox}>
                            <input type="checkbox" name="checkbox" />
                            <p>ONDC DETAILS VERIFIED   </p>
                            </label>
                        </div>
                        <div className={SCss.verifiedBtn}>
                            <p>KYC DETAILS VERIFIED</p>
                        </div>
                </div>
            </>
        </div>
    </div>
  )
}

export default SellerDetail