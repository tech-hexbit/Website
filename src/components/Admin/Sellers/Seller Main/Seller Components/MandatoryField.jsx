import React from 'react'
import { useState,useContext } from 'react';


// axios
import axios from "axios";

// state
import AuthContext from "../../../../../store/auth-context";

// Css
import SCss from '../CSS/sellerDetail.module.css'

function MandatoryField({props}) {
  const [bankDetailsVerified, setBankDetailsVerified] = useState(false);
    const [gstAndPANVerified, setGstAndPANVerified] = useState(false);
    const [ondcDetailsVerified, setOndcDetailsVerified] = useState(false);
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

    const handleBankDetailsChange = () => {
        setBankDetailsVerified(!bankDetailsVerified);
    };

    const handleGstAndPANChange = () => {
        setGstAndPANVerified(!gstAndPANVerified);
    };

    const handleOndcDetailsChange = () => {
        setOndcDetailsVerified(!ondcDetailsVerified);
    };
    const authCtx = useContext(AuthContext);
    const saveVer = async () => {
      console.log("done")
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

    const handleVerifyKYC = () => {
        if (bankDetailsVerified && gstAndPANVerified && ondcDetailsVerified) {
           saveVer();
        } else {
            // Provide feedback if any checkbox is not checked
            console.log('Please verify all mandatory fields!');
        }
    };
    const buttonClassName = bankDetailsVerified && gstAndPANVerified && ondcDetailsVerified
        ? `${SCss.verifiedBtn} ${SCss.verifiedBtnActive}`
        : SCss.verifiedBtn;

    return (
       <>
        {
          props.show.val.accountVerified ? (
            ""
          ):(
            <div className={SCss.mandatoryFields}>
            <u>
                <div className={SCss.mandatoryT}>
                    <p className={SCss.asterisk}>**</p>
                    <p>All Check Box Verification are Mandatory</p>
                    <p className={SCss.asterisk}>**</p>
                </div>
            </u>
            <div>
                <label className={SCss.checkbox}>
                    <input type="checkbox" name="bankDetails" onChange={handleBankDetailsChange} />
                    <p>BANK DETAILS VERIFIED</p>
                </label>
                <label className={SCss.checkbox}>
                    <input type="checkbox" name="gstAndPAN" onChange={handleGstAndPANChange} />
                    <p>GST & PAN VERIFIED</p>
                </label>
                <label className={SCss.checkbox}>
                    <input type="checkbox" name="ondcDetails" onChange={handleOndcDetailsChange} />
                    <p>ONDC DETAILS VERIFIED</p>
                </label>
            </div>
            <div className={buttonClassName}>
                <p onClick={handleVerifyKYC}>KYC DETAILS VERIFIED</p>
            </div>
        </div>
          )
        }
       </>
    );
}

export default MandatoryField