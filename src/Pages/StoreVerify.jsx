import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// components
import Bank from "./../components/StoreDetails/Bank";
import Header from "./../components/StoreDetails/Header";
import GstPan from "./../components/StoreDetails/GstPan";
import Address from "./../components/StoreDetails/Address";
import UploadFiles from "./../components/StoreDetails/UploadFiles";
import Particulars from "./../components/StoreDetails/Particulars";
import StoreDetails from "./../components/StoreDetails/StoreDetails";

// MicroInteraction
import { Alert } from "./../MicroInteraction/Alert";

// store
import AuthContext from "./../store/auth-context";

// css
import SvCss from "./Css/StoreVerify.module.css";

export default function StoreVerify() {
  const [load, setLoad] = useState(false);
  const [showData, setData] = useState({
    FirstName: "",
    LastName: "",
    LegalName: "",
    EmailID: "",
    // Password: "",
    DOB: "",
    Description: "",
    Pincode: "",
    Address: "",
    City: "",
    State: "",
    StoreLocation: "",
    AccountNo: "",
    IfscCode: "",
    AcHolderName: "",
    BankName: "",
    BranchName: "",
    Gstin: "",
    FssaiLicence: "",
    PanNo: "",
    LocationAvailabilityMode: "",
    TimeToShip: "",
    Cancellable: "",
    Returnable: "",
    ContactDetailsForConsumerCare: "",
    DefaultCategoryId: "",
    StoreTimingStart: "",
    StoreTimingEnd: "",
    // gps: "",
    radius: "",
  });
  const [images, setImages] = useState({
    imageUploadCheque: "",
    imageUploadAddress: "",
    imageUploadID: "",
  });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  const onSubmit = async () => {};

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    console.table(showData);
  }, [showData]);

  return (
    <>
      <div className={SvCss.Ldiv}>
        <div className={SvCss.boxDiv}>
          <Header load={load} onSubmit={onSubmit} />
          <Particulars showData={showData} setData={setData} />
          <Address showData={showData} setData={setData} />
          <Bank showData={showData} setData={setData} />
          <GstPan showData={showData} setData={setData} />
          <UploadFiles images={images} setImages={setImages} />
          <StoreDetails showData={showData} setData={setData} />
          {/* Scroll to top */}
          <div onClick={scrollToTop} className={SvCss.scrollToTop}>
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
              class="lucide lucide-move-up"
            >
              <path d="M8 6L12 2L16 6" />
              <path d="M12 2V22" />
            </svg>
          </div>
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}
