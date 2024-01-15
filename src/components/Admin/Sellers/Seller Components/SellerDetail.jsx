import React from 'react'
// css
import SCss from './CSS/SellerDetail.module.css'


function SellerDetail() {
  return (
    <div className={SCss.main}>
        <div className={SCss.svg}>
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left">
            <path d="m15 18-6-6 6-6"/></svg>
        </div>
        <div>
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
            <div  className={SCss.alert}>
                <p className={SCss.alertSvg}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f52929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                </p>
                <p>UNVERIFIED SELLER</p>
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
                    <p>Adidas</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>PHONE NUMBER:</p>
                    <p>Navy Blue</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>EMAIL ID:</p>
                    <p>Synthetic light weight</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>ADDRESS:</p>
                    <p>Men's</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>STATE:</p>
                    <p>Adidas India Marketing Private Ltd</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>CITY:</p>
                    <p>Adidas India Marketing Private Ltd</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>PINCODE:</p>
                    <p>Adidas India Marketing Private Ltd</p>
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
                    <p>950gm</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>ID PROOF (PAN)</p>
                    <p>33.5 x 21 x 13.5 cm</p>
                </div>
                <div className={SCss.KYCSec}>
                    <p className={SCss.secText}>FSSAI LICENCE NO:</p>
                    <p>33.5 x 21 x 13.5 cm</p>
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