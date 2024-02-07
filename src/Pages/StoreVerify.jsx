import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

// components
import Bank from "./../components/StoreDetails/Bank";
import Header from "./../components/StoreDetails/Header";
import GstPan from "./../components/StoreDetails/GstPan";
import Address from "./../components/StoreDetails/Address";
import UploadFiles from "./../components/StoreDetails/UploadFiles";
import Particulars from "./../components/StoreDetails/Particulars";
import StoreDetails from "./../components/StoreDetails/StoreDetails";
import Load from "../MicroInteraction/Load";

// MicroInteraction
import { Alert } from "./../MicroInteraction/Alert";

// store
import AuthContext from "./../store/auth-context";

// css
import SvCss from "./Css/StoreVerify.module.css";

export default function StoreVerify() {
  const [load, setLoad] = useState(false);
  const [showData, setData] = useState({
    DOB: "",
    City: "",
    Days: "",
    State: "",
    Gstin: "",
    PanNo: "",
    EmailID: "",
    Pincode: "",
    Address: "",
    IfscCode: "",
    LastName: "",
    BankName: "",
    FirstName: "",
    LegalName: "",
    AccountNo: "",
    BranchName: "",
    Description: "",
    AcHolderName: "",
    StoreLocation: "",
    FssaiLicence: "",
    TimeToShip: "",
    Cancellable: "",
    Returnable: "",
    radius: "",
    Percentage: "",
    ContactDetails: "",
    SupportEmail: "",
    times: ["0000", "0000"],
    LocationAvailabilityMode: "",
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
  const [disable, setDisable] = useState({
    Pincode: false,
    Pan: false,
    Gstin: false,
    Bank: false,
  });

  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  const onSubmit = async () => {
    setLoad(true);
    if (
      showData.FirstName === "" ||
      showData.LastName === "" ||
      showData.LegalName === "" ||
      showData.EmailID === "" ||
      showData.DOB === "" ||
      showData.Description === "" ||
      showData.Pincode === "" ||
      showData.Address === "" ||
      showData.City === "" ||
      showData.State === "" ||
      showData.StoreLocation === "" ||
      showData.AccountNo === "" ||
      showData.IfscCode === "" ||
      showData.AcHolderName === "" ||
      showData.BankName === "" ||
      showData.BranchName === "" ||
      showData.Gstin === "" ||
      showData.PanNo === "" ||
      showData.LocationAvailabilityMode === "" ||
      showData.TimeToShip === "" ||
      showData.radius === "" ||
      showData.Cancellable === "" ||
      showData.Returnable === "" ||
      showData.times == [] ||
      showData.Days === "" ||
      showData.ContactDetails === "" ||
      showData.SupportEmail === ""
    ) {
      setLoad(false);

      setError({
        mainColor: "#FFC0CB",
        secondaryColor: "#FF69B4",
        symbol: "pets",
        title: "Check it out",
        text: "Please Fill All The Details",
        val: true,
      });
    } else {
      try {
        let data = {
          days: showData.Days,
          times: [],
        };

        data = showData;

        const response = await axios.post(
          "/api/common/Store/CreateStore",
          data,
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );
        if (response.data.success) {
          setError({
            mainColor: "#EDFEEE",
            secondaryColor: "#5CB660",
            symbol: "check_circle",
            title: "Success",
            text: response.data.msg,
            val: true,
          });

          await authCtx.updateStore(response.data.upData[0].Store);

          // redirect("/me");

          setLoad(false);
        } else {
          console.log(response.data);

          setLoad(false);
        }
      } catch (e) {
        console.log(e);

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
    }
  };

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
